import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: 100px;
`

export const AddRefButton = styled.button`
  ${tw`bg-blue-500 rounded p-2 ml-2 text-white`}
  margin-bottom:30px;
`
