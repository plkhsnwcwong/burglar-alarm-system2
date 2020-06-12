# 防盜小保鑣 (2號 Micro:bit)

## Step 1

點選「廣播」,把「廣播群組設為1」拖曳到「當開始時」的C形開口。

```blocks
radio.setGroup(1)
```

## Step 2

修改「廣播群組」數值,例如20。

```blocks
radio.setGroup(20)
```

## Step 3

點選「邏輯」,把「如果...那麼...」拖曳到「重複無限次」的 C 形開口。
```blocks
basic.forever(function () {
    if (true) {
    	
    }
})
```

## Step 4

再次點選「邏輯」,把「<」方塊拖曳到「如果」後面。
```blocks
radio.setGroup(20)
basic.forever(function () {
    if (0 < 0) {
    	
    }
})
```

## Step 5
把「<」修改為「>」。
```blocks
radio.setGroup(20)
basic.forever(function () {
    if (0 > 0) {
    	
    }
})
```

## Step 6
點選「輸入」,把「光線感應值」拖曳到「>」的左面空格。
```blocks
radio.setGroup(20)
basic.forever(function () {
    if (input.lightLevel() > 0) {
    	
    }
})
```

## Step 7
在「>」右面的空格輸入數值「5」。
```blocks
radio.setGroup(20)
basic.forever(function () {
    if (input.lightLevel() > 5) {
    	
    }
})
```

## Step 8
點選「廣播」,拖曳「廣播發送數字」到「那麼」的右面。
```blocks
radio.setGroup(20)
basic.forever(function () {
    if (input.lightLevel() > 5) {
        radio.sendNumber(0)
    }
})
```

## Step 9
修改數值為「1」。 
```blocks
radio.setGroup(20)
basic.forever(function () {
    if (input.lightLevel() > 5) {
        radio.sendNumber(1)
    }
})
```

