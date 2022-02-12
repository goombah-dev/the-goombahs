import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from '../redux/blockchain/blockchainActions'
import { fetchData } from '../redux/data/dataActions'
import Marquee from 'react-fast-marquee'

import { FullLockLogo } from '../components/svg/FullLockLogo'

// styled components from OG minter project
import * as s from '../styles/pages/_global-sc-styles.jsx'
import {
  StyledButton,
  StyledRoundButton,
  ResponsiveWrapper,
  StyledLogo,
  StyledImg,
  StyledLink,
} from '../styles/pages/_minter-sc-styles.jsx'

// NextJS styles
import {
  mintInfoContainer,
  mintMarquee,
  minterContainer,
  header,
  blurb,
} from '../styles/pages/mint.module.scss'
import { baseUrlPng } from '../utils/base-url'

// utlity fn
const truncate = (input, len) =>
  input.length > len
    ? `${input.substring(0, len)}...`
    : input

// goombah images
const nftImageUrls = [
  'assoc-3_rscxkm',
  'soldato_wfxhft',
  'capo-3_zpnmti',
  'consig_upeopg',
  'shark_lbyoyw',
  'assoc_t5h0tx',
  'uboss_qrb8bo',
  'boss_w9ttpo',
]


const Mint = () => {
  const dispatch = useDispatch()
  const blockchain = useSelector(
    (state) => state.blockchain
  )
  const data = useSelector((state) => state.data)
  const [claimingNft, setClaimingNft] = useState(false)
  const [feedback, setFeedback] = useState(
    `Click buy to mint your NFT.`
  )
  const [mintAmount, setMintAmount] = useState(1)
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: '',
    SCAN_LINK: '',
    NETWORK: {
      NAME: '',
      SYMBOL: '',
      ID: 0,
    },
    NFT_NAME: '',
    SYMBOL: '',
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: '',
    MARKETPLACE_LINK: '',
    SHOW_BACKGROUND: false,
  })

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST
    let gasLimit = CONFIG.GAS_LIMIT
    let totalCostWei = String(cost * mintAmount)
    let totalGasLimit = String(gasLimit * mintAmount)
    console.log('Cost: ', totalCostWei)
    console.log('Gas limit: ', totalGasLimit)
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`)
    setClaimingNft(true)
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once('error', (err) => {
        console.log(err)
        setFeedback(
          'Sorry, something went wrong please try again later.'
        )
        setClaimingNft(false)
      })
      .then((receipt) => {
        console.log(receipt)
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        )
        setClaimingNft(false)
        dispatch(fetchData(blockchain.account))
      })
  }

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1
    if (newMintAmount < 1) {
      newMintAmount = 1
    }
    setMintAmount(newMintAmount)
  }

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1
    if (newMintAmount > 5) {
      newMintAmount = 5
    }
    setMintAmount(newMintAmount)
  }

  const getData = () => {
    if (
      blockchain.account !== '' &&
      blockchain.smartContract !== null
    ) {
      dispatch(fetchData(blockchain.account))
    }
  }

  const getConfig = async () => {
    const configResponse = await fetch(
      '/config/config.json',
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    )
    const config = await configResponse.json()
    SET_CONFIG(config)
  }

  // get config on mount
  useEffect(() => {
    getConfig()
  }, [])

  // get config when account changes
  useEffect(() => {
    getData()
  }, [blockchain.account])

  return (
    <>
      <div className={mintInfoContainer}>
        <h1 className={header}>Time to Join the Family</h1>
        <p className={blurb}>
          Minting is available, get your hands on a Goombah
          and enable the first Teflon Don and beyond, costs
          a traditional, equally fair, no matter the rank,
          0.08 ETH. There are no price tiers or gauging
          regardless of inflation by the real crooks
          membership osts the same for everyone. Minting is
          available, get your hands on a Goombah and enables
          the first of many instant rewards. The Infinite
          Goombah Giveaway Campaign. Now its time to meet
          The Family.
          <br />
          <br />
          Please note: Once you make the purchase, you
          cannot undo this action.
        </p>
      </div>
      <Marquee className={mintMarquee} gradient={false}>
        {nftImageUrls.map((imgUrl) => {
          return (
            <span>
              <img src={baseUrlPng(`tokens/${imgUrl}`)} alt="" />
            </span>
          )
        })}
        {nftImageUrls.map((imgUrl) => {
          return (
            <span>
              <img src={baseUrlPng(`tokens/${imgUrl}`)} alt="" />
            </span>
          )
        })}
      </Marquee>

      <section className={minterContainer}>
        <s.Screen>
          <s.Container
            flex={1}
            ai={'center'}
            style={{
              padding: 24,
            }}
          >
            <FullLockLogo /> 
            <p 
              style={{
                letterSpacing: 'var(--push-2xl)',
                fontWeight: 'var(--light)',
                transform: 'scale(.5)',
                marginTop: '-5px'
              }}
            >JOIN THE FAMILY</p> 
            <s.SpacerSmall />
            <ResponsiveWrapper
              flex={1}
              style={{ padding: 24 }}
              test
            >
              {/* <s.Container
                flex={1}
                jc={'center'}
                ai={'center'}
              >
              </s.Container> */}
              <s.SpacerLarge />
              <s.Container
                flex={2}
                jc={'center'}
                ai={'center'}
                style={{
                  padding: 24,
                  borderRadius: 24,
                  backgroundColor: 'var(--grey-90)',
                  boxShadow:
                    '0px 5px 11px 2px rgba(0,0,0,0.7)',
                }}
              >
                <s.TextTitle
                  style={{
                    textAlign: 'center',
                    fontSize: 50,
                    fontWeight: 'bold',
                    color: 'var(--accent-text)',
                  }}
                >
                  {data.totalSupply} / {CONFIG.MAX_SUPPLY}
                </s.TextTitle>
                <s.TextDescription
                  style={{
                    textAlign: 'center',
                    color: 'var(--primary-text)',
                  }}
                >
                  <StyledLink
                    target={'_blank'}
                    href={CONFIG.SCAN_LINK}
                  >
                    {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                  </StyledLink>
                </s.TextDescription>
                <s.SpacerSmall />
                {Number(data.totalSupply) >=
                CONFIG.MAX_SUPPLY ? (
                  <>
                    <s.TextTitle
                      style={{
                        textAlign: 'center',
                        color: 'var(--accent-text)',
                      }}
                    >
                      The sale has ended.
                    </s.TextTitle>
                    <s.TextDescription
                      style={{
                        textAlign: 'center',
                        color: 'var(--accent-text)',
                      }}
                    >
                      You can still find {CONFIG.NFT_NAME}{' '}
                      on
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <StyledLink
                      target={'_blank'}
                      href={CONFIG.MARKETPLACE_LINK}
                    >
                      {CONFIG.MARKETPLACE}
                    </StyledLink>
                  </>
                ) : (
                  <>
                    <s.TextTitle
                      style={{
                        textAlign: 'center',
                        color: 'var(--accent-text)',
                      }}
                    >
                      1 {CONFIG.SYMBOL} costs{' '}
                      {CONFIG.DISPLAY_COST}{' '}
                      {CONFIG.NETWORK.SYMBOL}.
                    </s.TextTitle>
                    <s.SpacerXSmall />
                    <s.TextDescription
                      style={{
                        textAlign: 'center',
                        color: 'var(--accent-text)',
                      }}
                    >
                      Excluding gas fees.
                    </s.TextDescription>
                    <s.SpacerSmall />
                    {blockchain.account === '' ||
                    blockchain.smartContract === null ? (
                      <s.Container
                        ai={'center'}
                        jc={'center'}
                      >
                        <s.TextDescription
                          style={{
                            textAlign: 'center',
                            color: 'var(--accent-text)',
                          }}
                        >
                          Connect to the{' '}
                          {CONFIG.NETWORK.NAME} network
                        </s.TextDescription>
                        <s.SpacerMedium />
                        <button
                          className='btn btn__primary'
                          onClick={(e) => {
                            e.preventDefault()
                            dispatch(connect())
                            getData()
                          }}
                        >
                          CONNECT
                        </button>
                        {blockchain.errorMsg !== '' ? (
                          <>
                            <s.SpacerSmall />
                            <s.TextDescription
                              style={{
                                textAlign: 'center',
                                color: 'var(--accent-text)',
                              }}
                            >
                              {blockchain.errorMsg}
                            </s.TextDescription>
                          </>
                        ) : null}
                      </s.Container>
                    ) : (
                      <>
                        <s.TextDescription
                          style={{
                            textAlign: 'center',
                            color: 'var(--accent-text)',
                          }}
                        >
                          {feedback}
                        </s.TextDescription>
                        <s.SpacerMedium />
                        <s.Container
                          ai={'center'}
                          jc={'center'}
                          fd={'row'}
                        >
                          <StyledRoundButton
                            style={{ lineHeight: 0.4 }}
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault()
                              decrementMintAmount()
                            }}
                          >
                            -
                          </StyledRoundButton>
                          <s.SpacerMedium />
                          <s.TextDescription
                            style={{
                              textAlign: 'center',
                              color: 'var(--accent-text)',
                            }}
                          >
                            {mintAmount}
                          </s.TextDescription>
                          <s.SpacerMedium />
                          <StyledRoundButton
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault()
                              incrementMintAmount()
                            }}
                          >
                            +
                          </StyledRoundButton>
                        </s.Container>
                        <s.SpacerSmall />
                        <s.Container
                          ai={'center'}
                          jc={'center'}
                          fd={'row'}
                        >
                          <StyledButton
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault()
                              claimNFTs()
                              getData()
                            }}
                          >
                            {claimingNft ? 'BUSY' : 'BUY'}
                          </StyledButton>
                        </s.Container>
                      </>
                    )}
                  </>
                )}
                <s.SpacerMedium />
              </s.Container>
              <s.SpacerLarge />
              {/* <s.Container
                flex={1}
                jc={'center'}
                ai={'center'}
              >
                <StyledImg
                  alt={'example'}
                  src={'/config/images/example.gif'}
                  //              style={{ transform: "scaleX(-1)" }}
                />
              </s.Container> */}
            </ResponsiveWrapper>
            <s.SpacerMedium />
            <s.Container
              jc={'center'}
              ai={'center'}
              style={{ width: '80%' }}
            >
              <s.TextDescription
                style={{
                  textAlign: 'center',
                  color: 'var(--primary-text)',
                }}
              >
                Please make sure you are connected to the
                right network ({CONFIG.NETWORK.NAME}{' '}
                Mainnet) and the correct address. Please
                note: Once you make the purchase, you cannot
                undo this action.
              </s.TextDescription>
              <s.SpacerSmall />
              <s.TextDescription
                style={{
                  textAlign: 'center',
                  color: 'var(--primary-text)',
                }}
              >
                We have set the gas limit to{' '}
                {CONFIG.GAS_LIMIT} for the contract to
                successfully mint your NFT. We recommend
                that you don't lower the gas limit.
              </s.TextDescription>
            </s.Container>
          </s.Container>
        </s.Screen>
      </section>
    </>
  )
}

export default Mint
