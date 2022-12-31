import Flex from 'components/layout/Flex'
import Text from 'components/atoms/Text'
import React, { useCallback, useEffect, useRef, useState } from "react"
import styled from "styled-components"

const DropdownRoot = styled.div`
  position: relative;
  height: 38px;
`

const DropdownControl = styled.div<{ hasError?: boolean}>`
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  border: ${({ theme, hasError }) =>
    hasError
      ? `1px solid ${theme.colors.danger}`
      : `1px solid ${theme.colors.border}`};
  border-radius: 5px;
  box-sizing: border-box;
  cursor: default;
  outline: none;
  padding: 8px 52px 8px 12px;
`

const DropdownValue = styled.div`
  color: ${({ theme }) => theme.colors.text};
`

const DropdownPlaceholder = styled.div`
  color: #757575;
  font-size: ${({ theme }) => theme.colors.text};
  min-height: 20px;
  line-height: 20px;
`

const DropdownArrow = styled.div<{ isOpen?: boolean}>`
  border-color: ${({ isOpen }) => 
  isOpen
    ? 'transparent transparent #222222;'
    : '#222222 transparent transparent' };
  
`

const DropdownMenu = styled.div`
  background-color: #ffffff,
  border: ${({ theme }) => theme.colors.border};
  box-shadow: 0px 5px 5px -3px rgb(0 00/20%),
    0px 8px 10px 1px rgb(0 00/ 10%), 0px 3px 14px 2px rgb(0 00/ 12%);
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1000;
`

const DropdownOption = styled.div`
  padding: 8px 12px 8px 12px;
  &:hover{
    background-color: #f9f9f9;
  }
`

interface DropdownItemProps {
  item: DropdownItem
} 

const DropdownItem = (props: DropdownItemProps) => {
  const { item } = props
  return (
    <Flex alignItems = "center">
      <Text margin={0} variant="small">
        {item.label ?? item.value}
      </Text>
    </Flex>
  )
}

export interface DropdownItem {
  value: string | number | null
  label?: string
}

interface DropdownProps{
  /**
   * ドロップダウンの選択肢
   */
  options: DropdownItem[]
  /**
   * ドロップダウンの値
   */
  value?: string | number
  /**
   * <input />のname属性
   */
  name?: string
  /**
   * プレースホルダ―
   */
  placeholder?: string
  /**
   * バリデーションエラーフラグ
   */
  hasError?: boolean
  /**
   * 値が変化したときのイベントハンドラ
   */
  onChange?: (selected?: DropdownItem) => void
}

const Dropdown = (props: DropdownProps) => {
  const { onChange, name, options, hasError } = props
  const initialItem = options.find((i) => i.value === props.value)
  const [isOpen, setIsOpenValue] = useState(false)
  const [selectedItem, setSelectedItem] = useState(initialItem)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleDocumentClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      //自分自身をクリックした場合は何もしない
      if(dropdownRef.current) {
        const elems = dropdownRef.current.querySelectorAll('*')

        for (let i = 0; i < elems.length; i++) {
          if(elems[i] == e.target) {
            return
          }
        }
      }
      setIsOpenValue(false)
    },
    [dropdownRef],
  )

  //マウスダウンした時にドロップダウンを開く
  const handleMouseDown = (e: React.SyntheticEvent) => {
    setIsOpenValue((isOpen) => !isOpen)
    e.stopPropagation()
  }

  // ドロップダウンが選択した時
  const handleselectValue = (
    e:React.FormEvent<HTMLDivElement>,
    item: DropdownItem,
  ) => {
    e.stopPropagation

    setSelectedItem(item)
    setIsOpenValue(false)
    onChange && onChange(item)
  }

  useEffect(() => {
    //画面外のクリックとタッチをイベント設定
    document.addEventListener('click', handleDocumentClick, false) 
    document.addEventListener('touchend', handleDocumentClick, false)

    return function cleanup() {
      document.removeEventListener('click', handleDocumentClick, false)
      document.removeEventListener('touchend', handleDocumentClick, false)
    }
  },[]
  )

  return (
    <DropdownRoot ref={dropdownRef}>
      <DropdownControl
        hasError = {hasError}
        onMouseDown = {handleMouseDown}
        onTouchEnd = {handleMouseDown}
      >
          {selectedItem && (
            <DropdownValue>
              <DropdownItem item = {selectedItem}/>
            </DropdownValue>
          )}
        {/* 何も選択されてない時はプレースホルダーを表示 */}
        {!selectedItem&&(
          <DropdownPlaceholder>{props?.placeholder}</DropdownPlaceholder>
        )}
        {/* ダミーinput */}
        <input
          type = "hidden"
          name = {name}
          value = {selectedItem?.value ?? ''}
          onChange = {() => onChange && onChange(selectedItem) }
        />
        <DropdownArrow isOpen={isOpen}/>
      </DropdownControl>
      {/* ドロップダウンを表示 */}
      {isOpen && (
        <DropdownMenu>
          {props.options.map((item, idx) => (
            <DropdownOption
              key = {idx}
              onMouseDown={(e) => handleselectValue(e, item)}
              onClick = {(e) => handleselectValue(e, item)}
            >
              <DropdownItem item = {item}/>
            </DropdownOption>
          ))}
        </DropdownMenu>
      )}
    </DropdownRoot>
  )
}

export default Dropdown