function draw_pyramid(height) {
    let pyramid_scope = document.getElementById('pyramid');
    for (let i = 1; i < height; i++) {
        let div_node = document.createElement('div');
        div_node.innerHTML = ("<div class='space'></div>".repeat(height-i) 
                              + "<div class='square'></div>".repeat(i+1));
        pyramid_scope.appendChild(div_node);
    }
}

// Creating Pyramid version 2
function draw_pyramid_2(height) {
    for (let i=2; i <= height; i++) {
        let div_parent = document.createElement('div');
        for (let j=0; j <= height-1; j++) {
            let white_squares = height - i;
            let div_child = document.createElement('div');
            div_child.setAttribute('class', 'square');
            if (j < white_squares) div_child.style.background = "white"
            div_parent.appendChild(div_child);
            document.body.append(div_parent);
        }
    }
}


