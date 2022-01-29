import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";
import { Box } from "@chakra-ui/react";

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries());
        };
        fetchApi();
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <Box bgColor="white" height="100%" width="100%" borderRadius="lg">
                <NativeSelect
                    defaultValue=""
                    onChange={e => handleCountryChange(e.target.value)}
                >
                    <option value="">Global</option>
                    {fetchedCountries.map((country, i) => (
                        <option key={i} value={country}>
                            {country}
                        </option>
                    ))}
                </NativeSelect>
            </Box>
        </FormControl>
    );
};

export default CountryPicker;
