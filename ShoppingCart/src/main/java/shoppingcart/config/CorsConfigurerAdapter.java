package shoppingcart.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by Sorumi on 17/3/29.
 */
@Configuration
@EnableWebMvc
public class CorsConfigurerAdapter extends WebMvcConfigurerAdapter {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");
//                .allowedHeaders("Access-Control-Allow-Origin", "*");
    }
}