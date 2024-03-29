function testViewTwoNoteListHTML(){
  ID.reset()
  var note1 = new Note("hello")
  var note2 = new Note("goodbye")
  var noteList = new NoteList()

  noteList.createNote(note1)
  noteList.createNote(note2)

  var noteListView = new NoteListView(noteList)
  // console.log("view HTML", noteListView.viewNoteListHTML())

  assert.isEqual(noteListView.viewNoteListHTML() === "<ul><li><div><a href=#notes/0>hello</a></div></li><li><div><a href=#notes/1>goodbye</a></div></li></ul>" )
}

function testViewOneNoteListHTML(){
  ID.reset()
  var note1 = new Note("hello")
  var noteList = new NoteList()
  noteList.createNote(note1)
  var noteListView = new NoteListView(noteList)

  assert.isEqual(noteListView.viewNoteListHTML() === "<ul><li><div><a href=#notes/0>hello</a></div></li></ul>" )
}

function testViewZeroNoteListHTML(){
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList)

  assert.isEqual(noteListView.viewNoteListHTML() === "<ul><li><div></div></li></ul>" )
}

function testCanViewOnly20Characters(){
  ID.reset()
  var longNote = new Note("This text is much longer than the required 20 characters")
  var noteList = new NoteList()
  noteList.createNote(longNote)
  var noteListView = new NoteListView(noteList)
  // console.log("HTML", noteListView.viewNoteListHTML())
  assert.isEqual(noteListView.viewNoteListHTML() === "<ul><li><div><a href=#notes/0>This text is much lo</a></div></li></ul>")
}

// function testNoteIsLinkedToURL(){
//   ID.reset()

// }

testViewTwoNoteListHTML();
testViewOneNoteListHTML();
testViewZeroNoteListHTML();
testCanViewOnly20Characters();
