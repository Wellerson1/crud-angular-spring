package com.wellerson;

import com.wellerson.model.Course;
import com.wellerson.repository.CourseRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository) {
		return args -> {
			courseRepository.deleteAll();

			Course c = new Course();
			Course c1 = new Course();
			Course c2 = new Course();

			c.setName("Angular com Spring");
			c.setCategoria("front-end");

			c1.setName("Java");
			c1.setCategoria("back-end");

			c2.setName("React");
			c2.setCategoria("front-end");

			courseRepository.save(c);
			courseRepository.save(c1);
			courseRepository.save(c2);
		};
	}
}