package com.ossprac.openmind.global.config;

import java.util.Arrays;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
@EnableWebMvc
public class SwaggerConfig {

	private static final String API_NAME = "Openmind API";
	private static final String API_VERSION = "0.0.1";
	private static final String API_DESCRIPTION = "오픈마인드 API 명세서";

	@Bean
	public Docket api(){
		return new Docket(DocumentationType.OAS_30)
			.securityContexts(Arrays.asList(securityContext()))
			.securitySchemes(Arrays.asList(apiKey()))
			.useDefaultResponseMessages(true)
			.apiInfo(apiInfo())
			.select()
			.apis(RequestHandlerSelectors.basePackage("com.ossprac.openmind"))
			.paths(PathSelectors.any())
			.build();
	}

	private SecurityContext securityContext() {
		return SecurityContext.builder()
			.securityReferences(defaultAuth())
			.build();
	}

	private List<SecurityReference> defaultAuth() {
		AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything");
		AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
		authorizationScopes[0] = authorizationScope;
		return Arrays.asList(new SecurityReference("Authorization", authorizationScopes));
	}

	private ApiKey apiKey() {
		return new ApiKey("Authorization", "Authorization", "header");
	}

	public ApiInfo apiInfo() {
		return new ApiInfoBuilder()
			.title(API_NAME)
			.version(API_VERSION)
			.description(API_DESCRIPTION)
			.build();
	}


}
