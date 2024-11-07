import {View, Button, Checkbox } from '@tarojs/components'
import './login.scss'
import { APP_NAME } from "../../utils/configs";

const Login = () => {
  const handleFastLogin = () => {
    console.log('*****', 'handleFastLogin')
  }
  const handleNormalLogin = () => {
    console.log('*****', 'handleNormalLogin')
  }
  return (
    <View className={'login-container'}>
      <View className="logo"></View>
      <View className="welcome">欢迎来到{APP_NAME}</View>
      <View className="slogan">实现每个人的手办自由</View>
      <View className="contract">
        <Checkbox className="contract-checked" value="选项1"></Checkbox>
        登入注册代表你同意《{APP_NAME}用户协议》及《{APP_NAME}隐私政策》
      </View>
      <Button className="fast-login" onClick={handleFastLogin}>手机号快捷登录</Button>
      <Button className="mobile-vcode-login" onClick={handleNormalLogin}>输入手机号码登录</Button>
    </View>
  )
}

export default Login
