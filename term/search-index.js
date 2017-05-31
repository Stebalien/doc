var searchIndex = {};
searchIndex["term"] = {"doc":"Terminal formatting library.","items":[[4,"Attr","term","Terminal attributes for use with term.attr().",null,null],[13,"Bold","","Bold (or possibly bright) mode",0,null],[13,"Dim","","Dim mode, also called faint or half-bright. Often not supported",0,null],[13,"Italic","","Italics mode. Often not supported",0,null],[13,"Underline","","Underline mode",0,null],[13,"Blink","","Blink mode",0,null],[13,"Standout","","Standout mode. Often implemented as Reverse, sometimes coupled with Bold",0,null],[13,"Reverse","","Reverse mode, inverts the foreground and background colors",0,null],[13,"Secure","","Secure mode, also called invis mode. Hides the printed text",0,null],[13,"ForegroundColor","","Convenience attribute to set the foreground color",0,null],[13,"BackgroundColor","","Convenience attribute to set the background color",0,null],[4,"Error","","An error arising from interacting with the terminal.",null,null],[13,"Io","","Indicates an error from any underlying IO",1,null],[13,"TerminfoParsing","","Indicates an error during terminfo parsing",1,null],[13,"ParameterizedExpansion","","Indicates an error expanding a parameterized string from the terminfo database",1,null],[13,"NotSupported","","Indicates that the terminal does not support the requested operation.",1,null],[13,"TermUnset","","Indicates that the `TERM` environment variable was unset, and thus we were unable to detect which terminal we should be using.",1,null],[13,"TerminfoEntryNotFound","","Indicates that we were unable to find a terminfo entry for the requested terminal.",1,null],[13,"CursorDestinationInvalid","","Indicates that the cursor could not be moved to the requested position.",1,null],[13,"ColorOutOfRange","","Indicates that the terminal does not support displaying the requested color.",1,null],[5,"stdout","","Return a Terminal wrapping stdout, or None if a terminal couldn't be opened.",null,{"inputs":[],"output":{"name":"option"}}],[5,"stderr","","Return a Terminal wrapping stderr, or None if a terminal couldn't be opened.",null,{"inputs":[],"output":{"name":"option"}}],[0,"terminfo","","Terminfo database interface.",null,null],[3,"TermInfo","term::terminfo","A parsed terminfo database entry.",null,null],[12,"names","","Names for the terminal",2,null],[12,"bools","","Map of capability name to boolean value",2,null],[12,"numbers","","Map of capability name to numeric value",2,null],[12,"strings","","Map of capability name to raw (unexpanded) string",2,null],[3,"TerminfoTerminal","","A Terminal that knows how many colors it supports, with a reference to its parsed Terminfo database record.",null,null],[4,"Error","","An error from parsing a terminfo entry",null,null],[13,"BadMagic","","The \"magic\" number at the start of the file was wrong.",3,null],[13,"NotUtf8","","The names in the file were not valid UTF-8.",3,null],[13,"ShortNames","","The names section of the file was empty",3,null],[13,"TooManyBools","","More boolean parameters are present in the file than this crate knows how to interpret.",3,null],[13,"TooManyNumbers","","More number parameters are present in the file than this crate knows how to interpret.",3,null],[13,"TooManyStrings","","More string parameters are present in the file than this crate knows how to interpret.",3,null],[13,"InvalidLength","","The length of some field was not >= -1.",3,null],[13,"NamesMissingNull","","The names table was missing a trailing null terminator.",3,null],[13,"StringsMissingNull","","The strings table was missing a trailing null terminator.",3,null],[0,"searcher","","ncurses-compatible database discovery",null,null],[5,"get_dbpath_for_term","term::terminfo::searcher","Return path to database entry for `term`",null,{"inputs":[{"name":"str"}],"output":{"name":"option"}}],[0,"parser","term::terminfo","`TermInfo` format parsing. ncurses-compatible compiled terminfo format parsing (term(5))",null,null],[0,"compiled","term::terminfo::parser","ncurses-compatible compiled terminfo format parsing (term(5))",null,null],[5,"parse","term::terminfo::parser::compiled","Parse a compiled terminfo entry, using long capability names if `longnames` is true",null,{"inputs":[{"name":"read"},{"name":"bool"}],"output":{"name":"result"}}],[7,"boolfnames","","",null,null],[7,"boolnames","","",null,null],[7,"numfnames","","",null,null],[7,"numnames","","",null,null],[7,"stringfnames","","",null,null],[7,"stringnames","","",null,null],[0,"parm","term::terminfo","Parameterized string expansion",null,null],[3,"Variables","term::terminfo::parm","Container for static and dynamic variable arrays",null,null],[4,"Param","","Types of parameters a capability can use",null,null],[13,"Number","","",4,null],[13,"Words","","",4,null],[4,"Error","","An error from interpreting a parameterized string.",null,null],[13,"StackUnderflow","","Data was requested from the stack, but the stack didn't have enough elements.",5,null],[13,"TypeMismatch","","The type of the element(s) on top of the stack did not match the type that the operator wanted.",5,null],[13,"UnrecognizedFormatOption","","An unrecognized format option was used.",5,null],[13,"InvalidVariableName","","An invalid variable name was used.",5,null],[13,"InvalidParameterIndex","","An invalid parameter index was used.",5,null],[13,"MalformedCharacterConstant","","A malformed character constant was used.",5,null],[13,"IntegerConstantOverflow","","An integer constant was too large (overflowed an i32)",5,null],[13,"MalformedIntegerConstant","","A malformed integer constant was used.",5,null],[13,"FormatWidthOverflow","","A format width constant was too large (overflowed a usize)",5,null],[13,"FormatPrecisionOverflow","","A format precision constant was too large (overflowed a usize)",5,null],[5,"expand","","Expand a parameterized capability",null,null],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"param"}}],[11,"default","","",4,{"inputs":[],"output":{"name":"self"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",5,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",5,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",5,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"default","","",6,{"inputs":[],"output":{"name":"variables"}}],[11,"new","","Return a new zero-initialized Variables",6,{"inputs":[],"output":{"name":"variables"}}],[11,"fmt","term::terminfo","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"terminfo"}}],[11,"from_env","","Create a `TermInfo` based on current environment.",2,{"inputs":[],"output":{"name":"result"}}],[11,"from_name","","Create a `TermInfo` for the named terminal.",2,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"from_path","","Parse the given `TermInfo`.",2,{"inputs":[{"name":"p"}],"output":{"name":"result"}}],[11,"apply_cap","","Retrieve a capability `cmd` and expand it with `params`, writing result to `out`.",2,null],[11,"reset","","Write the reset string to `out`.",2,{"inputs":[{"name":"self"},{"name":"write"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",3,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",3,{"inputs":[{"name":"fromutf8error"}],"output":{"name":"self"}}],[11,"description","","",3,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",3,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"terminfoterminal"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fg","","",7,{"inputs":[{"name":"self"},{"name":"color"}],"output":{"name":"result"}}],[11,"bg","","",7,{"inputs":[{"name":"self"},{"name":"color"}],"output":{"name":"result"}}],[11,"attr","","",7,{"inputs":[{"name":"self"},{"name":"attr"}],"output":{"name":"result"}}],[11,"supports_attr","","",7,{"inputs":[{"name":"self"},{"name":"attr"}],"output":{"name":"bool"}}],[11,"reset","","",7,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"supports_reset","","",7,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"supports_color","","",7,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"cursor_up","","",7,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"delete_line","","",7,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"carriage_return","","",7,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"get_ref","","",7,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"get_mut","","",7,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"into_inner","","",7,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"new_with_terminfo","","Create a new TerminfoTerminal with the given TermInfo and Write.",7,{"inputs":[{"name":"t"},{"name":"terminfo"}],"output":{"name":"terminfoterminal"}}],[11,"new","","Create a new TerminfoTerminal for the current environment with the given Write.",7,{"inputs":[{"name":"t"}],"output":{"name":"option"}}],[11,"write","","",7,null],[11,"flush","","",7,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[0,"color","term","Terminal color definitions",null,null],[6,"Color","term::color","Number for a terminal color",null,null],[17,"BLACK","","",null,null],[17,"RED","","",null,null],[17,"GREEN","","",null,null],[17,"YELLOW","","",null,null],[17,"BLUE","","",null,null],[17,"MAGENTA","","",null,null],[17,"CYAN","","",null,null],[17,"WHITE","","",null,null],[17,"BRIGHT_BLACK","","",null,null],[17,"BRIGHT_RED","","",null,null],[17,"BRIGHT_GREEN","","",null,null],[17,"BRIGHT_YELLOW","","",null,null],[17,"BRIGHT_BLUE","","",null,null],[17,"BRIGHT_MAGENTA","","",null,null],[17,"BRIGHT_CYAN","","",null,null],[17,"BRIGHT_WHITE","","",null,null],[6,"StdoutTerminal","term","Alias for stdout terminals.",null,null],[6,"StderrTerminal","","Alias for stderr terminals.",null,null],[6,"Result","","The canonical `Result` type using this crate's Error type.",null,null],[8,"Terminal","","A terminal with similar capabilities to an ANSI Terminal (foreground/background colors etc).",null,null],[16,"Output","","The terminal's output writer type.",8,null],[10,"fg","","Sets the foreground color to the given color.",8,{"inputs":[{"name":"self"},{"name":"color"}],"output":{"name":"result"}}],[10,"bg","","Sets the background color to the given color.",8,{"inputs":[{"name":"self"},{"name":"color"}],"output":{"name":"result"}}],[10,"attr","","Sets the given terminal attribute, if supported.  Returns `Ok(())` if the attribute is supported and was sent to the terminal, or `Err(e)` if there was an error or the attribute wasn't supported.",8,{"inputs":[{"name":"self"},{"name":"attr"}],"output":{"name":"result"}}],[10,"supports_attr","","Returns whether the given terminal attribute is supported.",8,{"inputs":[{"name":"self"},{"name":"attr"}],"output":{"name":"bool"}}],[10,"reset","","Resets all terminal attributes and colors to their defaults.",8,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[10,"supports_reset","","Returns true if reset is supported.",8,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[10,"supports_color","","Returns true if color is fully supported.",8,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[10,"cursor_up","","Moves the cursor up one line.",8,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[10,"delete_line","","Deletes the text from the cursor location to the end of the line.",8,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[10,"carriage_return","","Moves the cursor to the left edge of the current line.",8,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[10,"get_ref","","Gets an immutable reference to the stream inside",8,null],[10,"get_mut","","Gets a mutable reference to the stream inside",8,null],[10,"into_inner","","Returns the contained stream, destroying the `Terminal`",8,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"attr"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"attr"}],"output":{"name":"bool"}}],[11,"hash","","",0,null],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"attr"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",1,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"from","","",1,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",1,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",1,{"inputs":[{"name":"error"}],"output":{"name":"self"}}]],"paths":[[4,"Attr"],[4,"Error"],[3,"TermInfo"],[4,"Error"],[4,"Param"],[4,"Error"],[3,"Variables"],[3,"TerminfoTerminal"],[8,"Terminal"]]};
initSearch(searchIndex);
