
import { View } from '@tarojs/components'
import { useEffect } from 'react'

const HelloWorld = () => {
  useEffect(() => {
    console.log('*****', 'componentDidMount')
  }, [])
  return (
    <View>hello word</View>
  )
}

export default HelloWorld
