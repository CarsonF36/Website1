sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong', 'hog rider', 'low taper fade', 'rizz', 'motivation', 'looksmaxxing']

sounds.forEach(sound => {
    btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText=sound
    document.getElementById('buttons').appendChild(btn)
})