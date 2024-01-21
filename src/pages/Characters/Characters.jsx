import "./Characters.css";
import React, { useEffect, useState } from "react";
import { getCharacters } from "../../services/Api/character.service";
import Card from "../../components/Card/Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import Spinner from "../../components/Spinner/Spinner";
import Search from "../../components/Search/Search";

const Characters = () => {
  const [res, setRes] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const loadPage = async (page, searchValue) => {
    const data = await getCharacters(page, searchValue);

    setRes(data);
    setTotalPages(data.data.info.pages);
    //console.log(data.data.info.pages);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
    loadPage(page, searchValue);

    //console.log(`Changed to page: ${value}`);
  };

  const handleSearchCharacter = async (value) => {
    setSearchValue(value);
    setPage(1);

    loadPage(1, value);
  };

  useEffect(() => {
    loadPage(page, searchValue);
  }, [page, searchValue]);

  return (
    <>

      
      <Search onChange={(e) => handleSearchCharacter(e.target.value)} />
      
      <div className="container">
        {res?.data === undefined && searchValue ? (
          <h1 style={{color: '#B2E028'}}>The character isn't found</h1>
        ) : res?.data === undefined ? (
          <Spinner />
        ) : (
          <>
            {res?.data?.results?.map((character) => (
              <Card key={character.id} character={character} />
            ))}
          </>
        )}
      </div>
      {res?.data &&
      <div className="pagination">
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={page}
            size="large"
            onChange={handleChangePage}
            sx={{
              "& .css-rppfq7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
                {
                  backgroundColor: "#01B5CC",
                  color: "#121212", // Cambiar el color del texto de la página seleccionada a azul
                  fontWeight: "bold", // Establecer el texto de la página seleccionada en negrita
                },
            }}
          />
        </Stack>
      </div>  
      }
    </>
  );
};

export default Characters;
