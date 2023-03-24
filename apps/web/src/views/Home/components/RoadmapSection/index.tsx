import { Heading, Flex } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import IconCard from '../IconCard'
import StatCardContent from './StatCardContent'



const Roadmap = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <Flex justifyContent="flex-start" alignItems="center" flexDirection="column"  >
      <Heading textAlign="center" scale="xl" py={4}>
        {t('Initial Roadmap 1')}
      </Heading>
      <Flex flexDirection={['column', null, null, 'row']} >
        <IconCard icon={<img src="/images/road.png" alt="Shadowswap" className="Shadow-road" />} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']} >
        <StatCardContent
         headingText={t('')}
         bodyText={[ t('Initial ShadowSwap Dex Launch'), 
         t('Release of Whitelist Campaign for IFO private sale allocations'), 
         t('Shadow Token Airdrop Announcement and Procedure'), 
          t('ShadowSwap IFO Launch Beigns'),  ]}
          highlightColor={theme.colors.failure}
         phase="1"
        />
        </IconCard>

        <IconCard icon={<img src="/images/road.png" alt="Shadowswap" className="Shadow-road" />}  mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('')}
            bodyText={[ t('Trading, Farming, ShadowPool along with other features'),    
            t('Shadow Brigde Release'),
            t('Partnerships with other projects'),    
            t('Shadow Treasury Setup'),    
            t('Shadows Validator Launch'), ]}
            highlightColor={theme.colors.failure}
            phase="2"
        />
        </IconCard>
        <IconCard icon={<img src="/images/road.png" alt="Shadowswap" className="Shadow-road" />}>
          <StatCardContent
            headingText={t('')}
            bodyText={[t('Shadow Governance Release with updates'),    
            t('First governance voting'),    
            t('Partnerships Updates'), 
            t('Developments Updates'),     
            t('Community Events'), ]}
            highlightColor={theme.colors.failure}
            phase="3"
        />
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Roadmap
