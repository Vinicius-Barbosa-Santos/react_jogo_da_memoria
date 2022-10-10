import * as C from './AppStyles'
import logoImage from './assets/devmemory_logo.png'
import { InfoItem } from './components/InfoItem/InfoItem'
import { Button } from './components/Button'
import restart from './svgs/restart.svg'
import { useEffect, useState } from 'react'
import { GridItemType } from './types/GridItemType'
import { items } from './data/items'
import { GridItem } from './components/GridItem'
import { formatTimeEllapse } from './helpers/formatTimeEllapse'

const App = () => {
  // começando o jogo
  const [playing, setPlaying] = useState<boolean>(false)
  // rodando o tempo
  const [timeEllapse, setTimeEllapse] = useState<number>(0)
  // Quantidade de movimentos
  const [moveCount, setMoveCount] = useState<number>(0)
  // Quantidade de cartaz exibidas menor do que 2
  const [showCount, setShowCount] = useState<number>(0)
  // Items do meu grid 
  const [gridItems, setGridItems] = useState<GridItemType[]>([])

  useEffect(() => {
    resetAndCreateGrid()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) {
        setTimeEllapse(timeEllapse + 1)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [timeEllapse, playing])

  useEffect(() => {
    if(moveCount > 0 && gridItems.every((item) => item.permanentShown === true)) {
      setPlaying(false)
    }
  }, [moveCount, gridItems])

  useEffect(() => {
    if (showCount === 2) {
      let opened = gridItems.filter((item) => item.shown === true)
      if (opened.length === 2) {

        let tmpGrid = [...gridItems]

        if (opened[0].item === opened[1].item) {
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true
              tmpGrid[i].shown = false
            }
          }

          setGridItems(tmpGrid)
          setShowCount(0)
        } else {
          setTimeout(() => {
            let tmpGrid = [...gridItems]

            for (let i in tmpGrid) {
              tmpGrid[i].shown = false
            }
          }, 1000)
        }

        setGridItems(tmpGrid)
        setShowCount(0)

        setMoveCount(moveCount => moveCount + 1)
      }
    }
  }, [showCount, gridItems])

  const resetAndCreateGrid = () => {
    setTimeEllapse(0)
    setMoveCount(0)
    setShowCount(0)

    // criar Grid Vazio

    let tmpGrid: GridItemType[] = []

    for (let i = 0; i < (items.length * 2); i++) {
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      })
    }

    // Preencher meu Grid

    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1
        while (pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2))
        }
        tmpGrid[pos].item = i
      }
    }

    setGridItems(tmpGrid)
    setPlaying(true)
  }

  const handleClickItem = (index: number) => {
    if (playing && index !== null && showCount < 2) {
      let tmpGrid = [...gridItems]

      if (tmpGrid[index].shown === false && tmpGrid[index].permanentShown === false) {
        tmpGrid[index].shown = true

        setShowCount(showCount + 1)
      }

      setGridItems(tmpGrid)
    }
  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} alt="" width={200} />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label='Tempo' value={formatTimeEllapse(timeEllapse)} />
          <InfoItem label='Movimentos' value={moveCount.toString()} />
        </C.InfoArea>

        <Button label='Reiniciar' icon={restart} onClick={resetAndCreateGrid} />
      </C.Info>

      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index) => (
            <GridItem
              key={index}
              item={item}
              onClick={() => handleClickItem(index)}
            />
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  )
}

export default App