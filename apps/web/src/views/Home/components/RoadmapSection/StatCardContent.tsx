import { Heading, Flex, Text } from '@pancakeswap/uikit'

const StatCardContent: React.FC<
  React.PropsWithChildren<{ headingText: string; bodyText: string[]; highlightColor: string; phase: string }>
> = ({ headingText, bodyText, highlightColor, phase }) => {
  return (
    <Flex
      minHeight={[null, null, null, '168px']}
      minWidth="232px"
      width="fit-content"
      flexDirection="column"
      justifyContent="flex-end"
      mt={[null, null, null, '64px']}
    >
      <Heading scale="xl">{headingText}</Heading>
      <Heading color={highlightColor} scale="xl" mb="24px" textAlign="center">
        Phase {phase}
      </Heading>
      <ul>
    {bodyText.map((point, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={i} style={{ listStyle: 'none', display: 'flex', alignItems: 'center' }}>
            <Text color="textSubtle" mr={2}>&#x2192;</Text>
            <Text color="textSubtle">{point}</Text>
        </li>
    ))}
</ul>
    </Flex>
  )
}

export default StatCardContent
