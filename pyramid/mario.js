function draw_pyramid(height) {
    let pyramid_scope = document.getElementById('pyramid');
    for (let i = 1; i < height; i++) {
        let div_node = document.createElement('div');
        div_node.innerHTML = ("<div class='space'></div>".repeat(height-i) 
                              + "<div class='square'></div>".repeat(i+1));
        pyramid_scope.appendChild(div_node);
    }
}
