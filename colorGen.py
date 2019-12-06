import random

def pad(n):
    if(len(n) < 2):
        return '0'+n
    return n

def dec2Hex(n):
    hexNum = hex(n)
    hexArr = hexNum.split('x')
    return hexArr[1]

def newRandomColor():
    newRed = pad(dec2Hex(random.randint(0,255)))
    newGreen = pad(dec2Hex(random.randint(0,255)))
    newBlue = pad(dec2Hex(random.randint(0,255)))

    newColor = '#' + newRed + newGreen + newBlue

    return newColor


colors = ['#ff0000', '#ff8000', '#ffff00', '#80ff00', '#00ff00', '#00ff80', '#00ffff', '#0080ff', '#0000ff', '#8000ff', '#ff00ff', '#ff0080']


i = 12
while(i < 108):
    colors.append(newRandomColor())
    i += 1


print(colors)
