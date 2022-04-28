package com.sidedish.service;

import com.sidedish.domain.UserOrder;
import com.sidedish.dto.SideDishOrderDto;
import com.sidedish.mapper.UserOrderMapper;
import com.sidedish.repository.UserOrderRepository;
import com.sidedish.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserOrderService {

    private final UserOrderRepository userOrderRepository;
    private final UserRepository userRepository;

    public void saveUserOrder(SideDishOrderDto sideDishOrderDto, String email) {
        Integer userId = userRepository.findIdByEmail(email);
        UserOrder userOrder = UserOrderMapper.convertToDomain(sideDishOrderDto, userId);
        userOrderRepository.save(userOrder);
    }
}