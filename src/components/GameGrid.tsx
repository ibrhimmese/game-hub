import { SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props{
    gameQuery:GameQuery;
}

const GameGrid = ({gameQuery}:Props) => {
const {data,error,isLoading} = useGames(gameQuery);
const skeletons = [1,2,3,4,5,6];

if(error) return  error && <Text>{error}</Text>;

return (
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} padding='10px' spacing={7}>
        {isLoading && skeletons.map(skeleton=><GameCardSkeleton key={skeleton}></GameCardSkeleton>)}
        {data.map((game)=>(
            <GameCard game={game} key={game.id}></GameCard>
        ))}
    </SimpleGrid>
)
}

export default GameGrid
