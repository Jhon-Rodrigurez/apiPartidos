package com.fesc.apipartidos;

import javax.crypto.SecretKey;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fesc.apipartidos.Utils.AppContexto;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;

@SpringBootApplication() //anotación de spring boot para indicarle que es la clase main
@EnableJpaAuditing //se utiliza para habilitar la funcionalidad de auditoría en las entidades JPA
public class ApipartidosApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApipartidosApplication.class, args);
		System.out.println("Api corriendo...");
		
		SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS512); /*Creamos un objeto de llave secreta que tiene un metodo teniendo como
																	 argumento de un algoritmo de firma utilizado para generar y verificar firmas digitales*/
		
		String base64Key = Encoders.BASE64.encode(key.getEncoded()); /*declaramos una variable en que se le asigna un codificado en formato base64
																	 se utiliza para codificar la representación de bytes de la clave*/
		System.out.println(base64Key);
	}

	@Bean//anotacion que se utiliza para proporcionar una instancia de una clase específica
	public ModelMapper modelMapper() {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);/*es una estrategia de coincidencia estricta que garantiza que los
																						campos del formulario se vinculen exactamente a los campos
																						del objeto de destino durante la validación en Spring Boot */
		return modelMapper;
	}

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public AppContexto appContexto() {
		return new AppContexto();
	}

}
