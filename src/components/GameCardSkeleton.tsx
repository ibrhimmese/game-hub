import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Skeleton height="300px"></Skeleton>
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
