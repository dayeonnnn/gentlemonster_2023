const tab = document.querySelectorAll('.tab h2 a')
const tabContent = document.querySelectorAll('.tab_content > div')
const login = document.querySelector('#login')
const id = document.querySelector('#id')
const pw = document.querySelector('#pw')
const view = document.querySelectorAll('.pwbox > a')
// console.log(tab[0], tab[1])
for(let i of tabContent) {i.style.display='none'}
tabContent[0].style.display = 'block'
tab.forEach(function(target, index, array){
    target.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of tab){i.classList.remove('active')}
        target.classList.add('active')
        for(let i of tabContent){i.style.display='none'}
        tabContent[index].style.display='block'
    })
})
view[1].style.display= 'none'
view[0].addEventListener('click',function(){
    view[0].style.display='none'
    view[1].style.display='inline'
})
view[1].addEventListener('click',function(){
    view[1].style.display='none'
    view[0].style.display='inline'
})
login.addEventListener('click',function(){
    if(id.value === '' || pw.value === ''){
        window.alert('아이디 또는 비밀번호를 확인하세요.')
    }
})