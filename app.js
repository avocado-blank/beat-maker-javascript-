//CLASS

// class DrumKit {
//   constructor() {
//     this.pads = document.querySelectorAll('.pad')
//     this.playBtn = document.querySelector('.play')
//     this.currentKickAudio = './sounds/kick-classic.wav'
//     this.currentSnareAudio = './sounds/snare-acoustic01.wav'
//     this.currentHihatAudio = './sounds/hihat-acoustic01.wav'
//     this.kickAudio = document.querySelector('.kick-sound')
//     this.snareAudio = document.querySelector('.snare-sound')
//     this.hihatAudio = document.querySelector('.hihat-sound')
//     this.selects = document.querySelectorAll('select')
//     this.index = 0
//     this.bpm = 150
//     this.isPlaying = null
//     this.muteBtns = document.querySelectorAll('.mute')
//     this.tempoSlider = document.querySelector('.tempo-slider')
//   }
//   activeBar() {
//     // console.log(this)
//     this.classList.toggle('active')
//   }
//   repeat() {
//     let steps = this.index % 8
//     const activePads = document.querySelectorAll(`.b${steps}`)
//     activePads.forEach((pads) => {
//       pads.style.animation = `playTrack 0.3s alternate ease-in-out 2`
//       if (pads.classList.contains('active')) {
//         if (pads.classList.contains('kick-pad')) {
//           this.kickAudio.currentTime = 0
//           this.kickAudio.play()
//           console.log('kick')
//         }
//         if (pads.classList.contains('snare-pad')) {
//           this.snareAudio.currentTime = 0
//           this.snareAudio.play()
//           console.log('snare')
//         }
//         if (pads.classList.contains('hihat-pad')) {
//           this.hihatAudio.currentTime = 0
//           this.hihatAudio.play()
//           console.log('hihat')
//         }
//       }
//     })

//     this.index++
//   }

//   start() {
//     let interval = (60 / this.bpm) * 1000
//     if (!this.isPlaying) {
//       this.isPlaying = setInterval(() => {
//         this.repeat()
//       }, interval)
//     } else {
//       clearInterval(this.isPlaying)
//       this.isPlaying = null
//     }
//   }

//   updateBtn() {
//     if (!this.isPlaying) {
//       this.playBtn.innerText = 'Stop'
//       this.playBtn.classList.add('active')
//     } else {
//       this.playBtn.innerText = 'Play'
//       this.playBtn.classList.remove('active')
//     }
//   }
//   changeSound(e) {
//     // console.log(e.target.name)
//     // console.log(e.target.value)
//     const selectName = e.target.name
//     const selectValue = e.target.value
//     switch (selectName) {
//       case 'kick-select':
//         this.kickAudio.src = selectValue
//         break
//       case 'snare-select':
//         this.snareAudio.src = selectValue
//         break
//       case 'hihat-select':
//         this.hihatAudio.src = selectValue
//         break
//       default:
//         break
//     }
//   }

//   mute(e) {
//     // console.log(e.target.getAttribute('data-track'))
//     const muteIndex = e.target.getAttribute('data-track')
//     e.target.classList.toggle('active')
//     if (e.target.classList.contains('active')) {
//       switch (muteIndex) {
//         case '0':
//           this.kickAudio.volume = 0
//           break
//         case '1':
//           this.snareAudio.volume = 0
//           break
//         case '2':
//           this.hihatAudio.volume = 0
//           break
//       }
//     } else {
//       switch (muteIndex) {
//         case '0':
//           this.kickAudio.volume = 1
//           break
//         case '1':
//           this.snareAudio.volume = 1
//           break
//         case '2':
//           this.hihatAudio.volume = 1
//           break
//       }
//     }
//   }
//   changeTempo(e) {
//     // console.log(e.target.value)
//     const tempoNumber = document.querySelector('.tempo-nr')
//     tempoNumber.innerText = e.target.value
//   }

//   updateTempo(e) {
//     this.bpm = e.target.value
//     // console.log(this.bpm)
//     clearInterval(this.isPlaying)
//     this.isPlaying = null
//     if (this.playBtn.classList.contains('active')) {
//       this.start()
//     }
//   }
// }

// const drumKit = new DrumKit()
// drumKit.pads.forEach((pad) => {
//   pad.addEventListener('click', drumKit.activeBar)
//   // pad.addEventListener('animationend', () => {
//   //   pad.style.animation = ''
//   // })
//   pad.addEventListener('animationend', function () {
//     this.style.animation = ''
//   })
// })

// drumKit.playBtn.addEventListener('click', () => {
//   drumKit.updateBtn()
//   drumKit.start()
// })

// drumKit.selects.forEach((select) => {
//   select.addEventListener('change', (e) => {
//     drumKit.changeSound(e)
//   })
// })

// drumKit.muteBtns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     drumKit.mute(e)
//   })
// })

// drumKit.tempoSlider.addEventListener('input', (e) => {
//   drumKit.changeTempo(e)
// })

// drumKit.tempoSlider.addEventListener('change', (e) => {
//   drumKit.updateTempo(e)
// })

//FUNCTIONAL
//variables
const pads = document.querySelectorAll('.pad')
const playBtn = document.querySelector('.play')
const kickAudio = document.querySelector('.kick-sound')
const snareAudio = document.querySelector('.snare-sound')
const hihatAudio = document.querySelector('.hihat-sound')
const selects = document.querySelectorAll('select')
const muteBtns = document.querySelectorAll('.mute')
const tempoSlider = document.querySelector('.tempo-slider')
// console.log(muteBtns)
let index = 0
let bpm = 150
let isPlaying = null

// functions
const repeat = () => {
  let steps = index % 8
  const activeBar = document.querySelectorAll(`.b${steps}`)
  activeBar.forEach((bar) => {
    bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`
    if (bar.classList.contains('active')) {
      if (bar.classList.contains('kick-pad')) {
        kickAudio.currentTime = 0
        kickAudio.play()
      }
      if (bar.classList.contains('snare-pad')) {
        snareAudio.currentTime = 0
        snareAudio.play()
      }
      if (bar.classList.contains('hihat-pad')) {
        hihatAudio.currentTime = 0
        hihatAudio.play()
      }
    }
  })
  index++
  //   console.log(steps)
}

const start = () => {
  let interval = (60 / bpm) * 1000
  if (!isPlaying) {
    isPlaying = setInterval(() => {
      repeat()
    }, interval)
  } else {
    clearInterval(isPlaying)
    isPlaying = null
  }
}

const updateBtn = () => {
  if (!isPlaying) {
    playBtn.innerText = 'Stop'
    playBtn.classList.add('active')
  } else {
    playBtn.innerText = 'Play'
    playBtn.classList.remove('active')
  }
}
const changeSong = (e) => {
  console.log(e.target.value)
  console.log(e.target.name)
  const selectName = e.target.name
  const selectValue = e.target.value
  switch (selectName) {
    case 'kick-select':
      kickAudio.src = selectValue
      break
    case 'snare-select':
      snareAudio.src = selectValue
      break
    case 'hihat-select':
      hihatAudio.src = selectValue
      break
  }
}

const mute = (e) => {
  // console.log(e.target.getAttribute('data-track'))
  e.target.classList.toggle('active')
  const muteIndex = e.target.getAttribute('data-track')
  if (e.target.classList.contains('active')) {
    switch (muteIndex) {
      case '0':
        kickAudio.volume = 0
        break
      case '1':
        snareAudio.volume = 0
        break
      case '2':
        hihatAudio.volume = 0
        break
    }
  } else {
    switch (muteIndex) {
      case '0':
        kickAudio.volume = 1
        break
      case '1':
        snareAudio.volume = 1
        break
      case '2':
        hihatAudio.volume = 1
        break
    }
  }
}

const changeTempo = (e) => {
  const tempoNumber = document.querySelector('.tempo-nr')
  tempoNumber.innerText = e.target.value
}

const updateTempo = (e) => {
  bpm = e.target.value

  clearInterval(isPlaying)
  if (playBtn.classList.contains('active')) {
    console.log(bpm)
    start()
  }
}

//Some Works
pads.forEach((pad) => {
  pad.addEventListener('click', () => {
    pad.classList.toggle('active')
  })
  pad.addEventListener('animationend', () => {
    pad.style.animation = ''
  })
})

playBtn.addEventListener('click', () => {
  updateBtn()
  start()
})

selects.forEach((select) => {
  select.addEventListener('change', (e) => {
    changeSong(e)
  })
})

muteBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    mute(e)
  })
})

tempoSlider.addEventListener('input', (e) => {
  changeTempo(e)
})

tempoSlider.addEventListener('change', (e) => {
  updateTempo(e)
  if (playBtn.classList.contains('active')) {
    // start()
    console.log(bpm)
    start()
  }
})
