package reduxbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@ComponentScan("com.reduxbackend")
@EntityScan(basePackages = {"com.reduxbackend.model"})
@EnableTransactionManagement
@SpringBootApplication
public class ReduxbackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReduxbackendApplication.class, args);
	}

}
