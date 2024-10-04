import { Badge } from '@chakra-ui/react';

interface Props{
    score:number;
}
const CriticScore = ({score}:Props) => {
    let color = score > 84 ? 'green':score > 69 ? 'yellow' : '';
  return (
    <Badge colorScheme={color} fontSize={14} paddingX={1} borderRadius={5}>{score}</Badge>
  )
}

export default CriticScore
