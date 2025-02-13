function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    domElement.setAttribute('style', reactElement.props.style.backgroundColor)
    container.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
        style: {
            color:'#ffff',
            backgroundColor: '#000000'
        }
            
        
    },
    children:'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)