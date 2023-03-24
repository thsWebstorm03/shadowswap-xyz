import styled from 'styled-components'
import { PageSection } from '@pancakeswap/uikit'
import { useAccount } from 'wagmi'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { useTranslation } from '@pancakeswap/localization'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { ChainId } from '@pancakeswap/sdk'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData, nftammSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import RoadmapSection from './components/RoadmapSection'
import SalesSection from './components/SalesSection'
import NftSection from './components/nftSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import MultipleBanner from './components/Banners/MultipleBanner'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC<React.PropsWithChildren> = () => {
  const { theme } = useTheme()
  const { address: account } = useAccount()
  const { chainId } = useActiveChainId()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  const { t } = useTranslation()

  return (
    <>
      <style jsx global>{`
        #home-1 .page-bg {
          background: url('https://raw.githubusercontent.com/SVerseLab/images/master/coneback.png');
          background-size: cover;
          background-position: center;
          background-width: 100%;
          background-height: 100vh;
        }

        [data-theme='dark'] #home-1 .page-bg {
          background: url('https://raw.githubusercontent.com/SVerseLab/images/master/coneback.png');
          background-size: cover;
          background-position: center;
          background-width: 100%;
          background-height: 100vh;
        }

        @media (max-width: 767px) {
          #home-1 .page-bg {
            background: url('https://raw.githubusercontent.com/SVerseLab/images/master/mobile-background.png');
            background-size: cover;
            background-position: center;
            background-width: 100%;
            background-height: 100vh;
          }
        }

        #home-2 .page-bg {
          background: linear-gradient(180deg, #09070c 22%, #9370db 100%);
        }
        [data-theme='dark'] #home-2 .page-bg {
          background: linear-gradient(180deg, #09070c 22%, #9370db 100%);
        }
        #home-3 .page-bg {
          background: url('https://raw.githubusercontent.com/SVerseLab/images/master/Box.jpg');
          background-size: cover;
          background-position: center;
          background-width: 100%;
          background-height: 100vh;
        }
        [data-theme='dark'] #home-3 .page-bg {
          background: url('https://raw.githubusercontent.com/SVerseLab/images/master/Box.jpg');
          background-size: cover;
          background-position: center;
          background-width: 100%;
          background-height: 100vh;
        }

        @media (max-width: 767px) {
          #home-3 .page-bg {
            background: url('https://raw.githubusercontent.com/SVerseLab/images/master/mobile-background.png');
            background-size: cover;
            background-position: center;
            background-width: 100%;
            background-height: 100vh;
          }
        }

        #home-4 .inner-wedge svg {
          fill: #9370db;
        }
        [data-theme='dark'] #home-4 .inner-wedge svg {
          fill: #9370db;
        }

        #home-5 .page-bg {
          background: linear-gradient(180deg, #09070c 22%, #000000 100%);
        }
        [data-theme='dark'] #home-5 .page-bg {
          background: linear-gradient(180deg, #09070c 22%, #000000 100%);
        }
      `}</style>
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-1',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        {account && chainId === ChainId.BSC && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )}
        <MultipleBanner />
        <Hero />
      </StyledHeroSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-2',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        containerProps={{
          id: 'home-4',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper top>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...swapSectionData(t)} />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <NftSection {...nftammSectionData(t)} />
      </PageSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-5',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <RoadmapSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.gradientCardHeader}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="150%" top>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...earnSectionData(t)} />
        {/* TODO: until we are enable fetch multi-chain farms */}
        <FarmsPoolsRow />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        containerProps={{
          id: 'home-3',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <WinSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...cakeSectionData(t)} />
        <CakeDataRow />
      </PageSection>
      
    </>
  )
}

export default Home
