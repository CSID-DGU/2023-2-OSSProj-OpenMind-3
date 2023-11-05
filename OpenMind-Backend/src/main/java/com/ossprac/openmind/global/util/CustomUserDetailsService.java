package com.ossprac.openmind.global.util;

import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ossprac.openmind.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String id)  {
        return userRepository.findByStudentId(id)
                .map(this::createUser)
                .orElseThrow(()-> new UsernameNotFoundException(id + "-> 데이터베이스에서 찾을 수 없습니다."));
    }


    private UserDetails createUser(com.ossprac.openmind.user.entity.User user){
        GrantedAuthority grantedAuthority =
                new SimpleGrantedAuthority("ROLE_USER");
            return new User(user.getStudentId(),user.getPassword(), Collections.singleton(grantedAuthority));
    }

}
