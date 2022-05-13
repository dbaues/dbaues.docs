/***********************************************
 * Functions utilized by the git.html frontend
 *
 * Gives the page a more dynamic feel
 ***********************************************/

function getLinks(data) {
    let docLinks = [];
    for(let i = 0; i < data.length; ++i){
        if(data[i] === '#'){
            i += '# Documentation\n'.length;
            // TODO: safety check this loop
            // Relies on very precise movement through the string that could lead to
            // an infinite loop
            while(data[i] != '#'){
                let line = '';
                let j = 0
                for(j; data[i+j] != '\n'; ++j) line += data[i+j];
                docLinks.push(line.split('->'));
                i += j+1;
            }
            break;
        }
    }
    return docLinks;
}

function dictify(data) {
    if(data === null) return;

    const dict = [];

    for(e in data) {
        if(data[e].length === 2)
            dict.push({name: data[e][0].trim(), link: data[e][1].trim(),});
    }
    return dict;
}

function appendLinks(data) {
    if(data === null){
        $('#sidebar').remove();
        return;
    };

    data.forEach(e => {
        $('#git-docs-links').append(
            `<li><a href="${e.link}"" target="_blank">${e.name}</a></li>`
        );
    });
}
