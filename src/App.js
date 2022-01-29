import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import Navbar from "./components/Navbar/index";

// import coronaImage from "./images/image.png";
import { Box, Heading } from "@chakra-ui/react";
import Footer from "./components/Footer";

class App extends React.Component {
    state = {
        data: {},
        country: ""
    };

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async country => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
    };

    render() {
        const { data, country } = this.state;

        return (
            <>
                <Navbar />
                <Box>
                    <div className={styles.container}>
                        <Heading
                            as="h3"
                            variant="section-title"
                            marginTop="90px"
                        >
                            COVID-19 TRACKER APPLICATION
                        </Heading>
                        <Cards data={data} />
                        <CountryPicker
                            handleCountryChange={this.handleCountryChange}
                        />
                        <Chart data={data} country={country} />
                    </div>
                </Box>
                <Footer />
            </>
        );
    }
}

export default App;
