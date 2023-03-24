import styled from 'styled-components'
import { ArrowForwardIcon, Button, Flex, Text } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from './NextLink'
import { useTranslation } from '@pancakeswap/localization'

const StyledLink = styled(NextLinkFromReactRouter)`
  width: 100%;
`

const PredictionCardContent = () => {
  const { t } = useTranslation()

  return (
    <>
      <Flex flexDirection="column" mt="48px">
        <Text color="#280D5F" bold fontSize="24px">
          {t('ShadowPad')}
        </Text>
        <Text color="#280D5F" mb="40px">
          {t(
            'ShadowPad will provide a series of pre-launch support, such as IFO(Initial Farm Offering), INO(Initial NFT Offering), Farm, Pool for Projects Launching on Core BlockChain.',
          )}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <StyledLink to="/ifo" id="homepage-prediction-cta">
          <Button width="100%">
            <Text bold color="invertedContrast">
              {t('Shadowpad')}
            </Text>
            <ArrowForwardIcon ml="4px" color="invertedContrast" />
          </Button>
        </StyledLink>
      </Flex>
    </>
  )
}

export default PredictionCardContent
