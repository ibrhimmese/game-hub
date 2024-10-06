import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"

interface Props{
    onSearch:(searchText:string)=>void;
}

const SearchInput = ({onSearch}:Props) => {
    const search = (e:any)=>onSearch(e.target.value || '')
  return (
    <form onSubmit={(event)=>{
        event.preventDefault();
        //if(ref.current) onSearch(ref.current.value);
    }}>
        <InputGroup>
    <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
        <Input onChange={search} borderRadius={20} placeholder="Search games..." variant='filled'></Input>
    </InputGroup>
    </form>
    
   
  )
}

export default SearchInput
