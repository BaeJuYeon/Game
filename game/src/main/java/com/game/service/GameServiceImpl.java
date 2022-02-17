package com.game.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.game.mapper.GameMapper;

@Service
public class GameServiceImpl implements GameService {

	@Autowired
	private GameMapper gameMapper;

//	@Override
//	public boolean registerMember(MemberDTO member) {
//		return true;
//	}
//
//	@Override
//	public boolean loginMember(MemberDTO member) {
//		MemberDTO result = gameMapper.selectMember(member);
//
//		return (result == null) ? false : true;
//	}

}
