import React, { useCallback } from 'react'
import { useObserver, useLocalStore } from 'mobx-react'

import { postStore, userStore } from '../store'
import { NextPage } from 'next'

const App: NextPage = () => {
  console.log(userStore)

  const state = useLocalStore(() => ({
    name: '',
    password: '',
    onChangeName(e: any) {
      this.name = e.target.value
    },
    onChangePassword(e: any) {
      this.password = e.target.value
    },
  }))

  const onClick = useCallback(() => {
    userStore.logIn({
      nickname: 'zerocho',
      password: '비밀번호',
    })
  }, [])

  const onLogout = useCallback(() => {
    userStore.logOut()
  }, [])

  return useObserver(() => (
    <div>
      {userStore.isLoggingIn ? (
        <div>로그인 중</div>
      ) : userStore.data ? (
        <div>로그인</div>
      ) : (
        '로그인 해주세요.'
      )}
      {!userStore.data ? (
        <button onClick={onClick}>로그인</button>
      ) : (
        <button onClick={onLogout}>로그아웃</button>
      )}
      <input value={state.name} onChange={state.onChangeName} />
      <input
        value={state.password}
        type="password"
        onChange={state.onChangePassword}
      />
    </div>
  ))
}

export default App
