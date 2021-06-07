def deaf_grandma():

  print("Say something to grandma.\n")  
  farewell = "GOODBYE!"
  counter = 0

  while counter < 2:
    prompt = input()
    if prompt == "":
      print("WHAT?!\n")
    elif prompt == prompt.upper() and prompt != farewell:
      print("NO, NOT SINCE 1946!\n")
    elif prompt == prompt.lower():
      print("SPEAK UP, KID!\n")
    elif prompt == farewell and counter == 0:
      print("LEAVING SO SOON?\n")
      counter = 1
    elif prompt == farewell and counter == 1:
      print("LATER, SKATER!")
      counter = 2
    else:
      print("...HUH?!  WHAT?!") 
