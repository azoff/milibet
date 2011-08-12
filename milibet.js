var url = require('url'),

port = 1337,

alphabet = {
    a: 'Alpha',
    b: 'Bravo',
    c: 'Charlie',
    d: 'Delta',
    e: 'Echo',
    f: 'Foxtrot',
    g: 'Golf',
    h: 'Hotel',
    i: 'India',
    j: 'Juliet',
    k: 'Kilo',
    l: 'Lima',
    m: 'Mike',
    n: 'November',
    o: 'Oscar',
    p: 'Papa',
    q: 'Quebec',
    r: 'Romeo',
    s: 'Sierra',
    t: 'Tango',
    u: 'Uniform',
    v: 'Victor',
    w: 'Whiskey',
    x: 'X-ray',
    y: 'Yankee',
    z: 'Zulu'
};

function militerize(input) {
    var i, key, output = '';
    for (i=0; i<input.length; i++) {
        key = input.substr(i,1).toLowerCase();
        output += (key in alphabet) ? alphabet[key] : key;
    }
    return output;
}

function server(req, res) {
    var input = url.parse(req.url).pathname.substr(1);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(militerize(input));
}

if (process.argv.length > 2) {
    process.stdout.write(militerize(process.argv[2]));
} else {
    require('http').createServer(server).listen(port, "127.0.0.1");
}