var lunr = require('lunr'),
    stdin = process.stdin,
    stdout = process.stdout,
    buffer = []

stdin.resume()
stdin.setEncoding('utf8')

stdin.on('data', function (data) {
    buffer.push(data)
})

stdin.on('end', function () {
    var documents = JSON.parse(buffer.join(''))

    var idx = lunr(function () {
        this.ref('id')
        this.field('uri')
        this.field('title')
        this.field('sub_title')
        this.field('body')

        documents.forEach(function (doc, idx) {
            doc.id = idx
            this.add(doc)
        }, this)
    })

    stdout.write("const data = " + JSON.stringify(idx))
})