import React from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import ToastPortal from './Portal'
import { Props, ToastType } from './types'
import { CONAINER_CLASSNAME } from './'
import colors from '../../styles/colors'
import { Info, AlertCircle, Slash } from 'react-feather'

const ToastStyle = createGlobalStyle`
  .ashUi-toastContainer {
    position: fixed;
    bottom: 5vh;
    left: 50%;
    width: auto;
    transform: translateX(-50%);
    z-index: 10000;
    width: 20vw;
    min-width: 280px;
  }
`

const StyledToast = styled.div<{isDestroying: boolean; type: ToastType}>`
  width: 100%;
  transition: 0.4s;
  border-radius: 8px;
  font-size: 1rem;
  padding: 0.5em;
  margin-bottom: 0.5em;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .typeIcon {
    margin-right: 0.5em;
    svg {
      vertical-align: top;
    }
  }
  ${props => props.isDestroying && css`
    opacity: 0;
  `}
  ${props => props.type === 'default' && css`
    background-color: ${colors.white};
    color: ${colors.jet500};
    border: 1px solid ${colors.jet400};
  `}
  ${props => props.type === 'error' && css`
    background-color: ${colors.danger};
    color: ${colors.white};
  `}
  ${props => props.type === 'success' && css`
    background-color: ${colors.success};
    color: ${colors.white};
  `}
  ${props => props.type === 'warning' && css`
    background-color: ${colors.warning};
    color: ${colors.white};
  `}
  ${props => props.type === 'info' && css`
    background-color: ${colors.info};
    color: ${colors.white};
  `}
`

const Toast: React.FC<Props> = (props) => {
  const {
    message,
    type = 'default',
    duration = 3500,
    style
  } = props
  const ref = React.useRef<HTMLDivElement>(null)
  const [isDestroying, setIsDestroying] = React.useState<boolean>(false)
  const [isDestroyed, setIsDestroyed] = React.useState<boolean>(false)
  const [duraion, setDuraion] = React.useState<number>(duration)

  const remove = () => {
    setDuraion(400)
  }

  React.useEffect(() => {
    let t1: number
    let t2: number
    if (!isDestroyed) {
      t1 = setTimeout(() => {
        setIsDestroying(true)
      }, duraion - 400)
      t2 = setTimeout(() => {
        const container = document.querySelector(`.${CONAINER_CLASSNAME}`) as Element
        container.removeChild(ref.current as HTMLDivElement)
        setIsDestroyed(true)
      }, duraion)
    }
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [isDestroyed, duraion])

  return (
    <ToastPortal>
      <ToastStyle />
      <StyledToast ref={ref} isDestroying={isDestroying} type={type}
        style={style} onClick={remove}>
        <span className="typeIcon">
          {type === 'default' && <Info size={20} />}
          {type === 'info' && <Info size={20} />}
          {type === 'error' && <Slash size={20} />}
          {type === 'success' && <Info size={20} />}
          {type === 'warning' && <AlertCircle size={20} />}
        </span>
        <span>
          {message}
        </span>
      </StyledToast>
    </ToastPortal>
  )
}

export default Toast
