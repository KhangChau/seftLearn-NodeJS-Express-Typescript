// event-loops
// requests commings -> execute those immediate code
// if encounting those operations with callbacks taking times
// -> regist those operations as completed ones 
// ->but not execute their callback, offload callback to the file system,
// -> then move to next operations
// if there is no any immediate codes to be executed, comeback and execute those previous callbacks

