package aptrue.backend.Global.Config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.servers.Server;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition(servers = {@Server(url = "https://ssafy-aptrue.co.kr", description = "진짜 서버")})
public class SwaggerConfig {
    @Bean
    public OpenAPI openAPI() {
        String jwt = "JWT";
        SecurityRequirement securityRequirement = new SecurityRequirement().addList(jwt);
        Components components = new Components().addSecuritySchemes(jwt, new SecurityScheme()
                .name(jwt)
                .type(SecurityScheme.Type.HTTP)
                .scheme("bearer")
                .bearerFormat(jwt)
        );
        return new OpenAPI()
                .components(components)
                .info(apiInfo())
                .addSecurityItem(securityRequirement);
    }
    private Info apiInfo() {
        return new Info()
                .title("API Test")
                .description("Let's practive Swagger UI")
                .version("1.0");    }
}
