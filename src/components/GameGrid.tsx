import { SimpleGrid, Text} from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props{
    gameQuery:GameQuery;
}

const GameGrid = ({gameQuery}:Props) => {
const {data,error,isLoading} = useGames(gameQuery);
const skeletons = [1,2,3,4,5,6];

return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} padding='10px' spacing={7}>
        {isLoading && skeletons.map(skeleton=><GameCardSkeleton key={skeleton}></GameCardSkeleton>)}
        {data.map((game)=>(
            <GameCard game={game} key={game.id}></GameCard>
        ))}
    </SimpleGrid>
    </>
)
}

export default GameGrid
