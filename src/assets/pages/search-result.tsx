import { Box, Image, Text } from "@chakra-ui/react";
import { UserEntity } from "../../entities/user";
import { SearchNoResult } from "./search-no-result";

interface searchResultProps {
    result : UserEntity[];
}

export function SearchResult({result}: searchResultProps) {
    if(result.length === 0) {
        return (
            <SearchNoResult/>
        )
    }

    return (
        <>
        {result.map((user) => {
            return (
                <>
                <Text color={"white"}>
                    {user.fullName}
                </Text>
                <Image src= {user.photoProfile} />
                
            </>
            )
        })}   
        </>
    )
}

