package com.highcharts.data.api.dataApi.fileReader;

import org.springframework.stereotype.Component;

@Component
public class DataFileReader {
    @Override
    public HashMap<String,Object> getCarsData() {
        Resource keycloakConfig = new ClassPathResource("cars.json");

        HashMap<String,Object> result = null;
        try {
            result = new ObjectMapper().readValue(keycloakConfig.getInputStream(), HashMap.class);
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.configure(MapperFeature.SORT_PROPERTIES_ALPHABETICALLY, true);
            result = objectMapper.readValue(keycloakConfig.getInputStream(), HashMap.class);
        } catch (IOException e) {
            logger.error("Couldn't load " + keycloakConfig.getFilename());
        }

        return result;
    }
}
