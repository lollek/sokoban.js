/* Created by Olle Kvarnstrom 
 * Date: 2013-10-01 */

/* Maps: */
var gRawMaps = [["    #####"
                ,"    #   #"
                ,"    #o  #"
                ,"  ###  o##"
                ,"  #  o o #"
                ,"### # ## #   ######"
                ,"#   # ## #####  ..#"
                ,"# o  o          ..#"
                ,"##### ### #@##  ..#"
                ,"    #     #########"
                ,"    #######"
                ],
                ["############"
                ,"#..  #     ###"
                ,"#..  # o  o  #"
                ,"#..  #o####  #"
                ,"#..    @ ##  #"
                ,"#..  # #  o ##"
                ,"###### ##o o #"
                ,"  # o  o o o #"
                ,"  #    #     #"
                ,"  ############"
                ],
                ["        ########"
                ,"        #     @#"
                ,"        # o#o ##"
                ,"        # o  o#"
                ,"        ##o o #"
                ,"######### o # ###"
                ,"#....  ## o  o  #"
                ,"##...    o  o   #"
                ,"#....  ##########"
                ,"########"
                ],
                ["           ########"
                ,"           #  ....#"
                ,"############  ....#"
                ,"#    #  o o   ....#"
                ,"# ooo#o  o #  ....#"
                ,"#  o     o #  ....#"
                ,"# oo #o o o########"
                ,"#  o #     #"
                ,"## #########"
                ,"#    #    ##"
                ,"#     o   ##"
                ,"#  oo#oo  @#"
                ,"#    #    ##"
                ,"###########"
                ],
                ["        #####"
                ,"        #   #####"
                ,"        # #o##  #"
                ,"        #     o #"
                ,"######### ###   #"
                ,"#....  ## o  o###"
                ,"#....    o oo ##"
                ,"#....  ##o  o @#"
                ,"#########  o  ##"
                ,"        # o o  #"
                ,"        ### ## #"
                ,"          #    #"
                ,"          ######"
                ],
                ["######  ###"
                ,"#..  # ##@##"
                ,"#..  ###   #"
                ,"#..     oo #"
                ,"#..  # # o #"
                ,"#..### # o #"
                ,"#### o #o  #"
                ,"   #  o# o #"
                ,"   # o  o  #"
                ,"   #  ##   #"
                ,"   #########"
                ],
                ["       #####"
                ," #######   ##"
                ,"## # @## oo #"
                ,"#    o      #"
                ,"#  o  ###   #"
                ,"### #####o###"
                ,"# o  ### ..#"
                ,"# o o o ...#"
                ,"#    ###...#"
                ,"# oo # #...#"
                ,"#  ### #####"
                ,"####"
                ],
                ["  ####"
                ,"  #  ###########"
                ,"  #    o   o o #"
                ,"  # o# o #  o  #"
                ,"  #  o o  #    #"
                ,"### o# #  #### #"
                ,"#@#o o o  ##   #"
                ,"#    o #o#   # #"
                ,"#   o    o o o #"
                ,"#####  #########"
                ,"  #      #"
                ,"  #      #"
                ,"  #......#"
                ,"  #......#"
                ,"  #......#"
                ,"  ########"
                ],
                ["          #######"
                ,"          #  ...#"
                ,"      #####  ...#"
                ,"      #      . .#"
                ,"      #  ##  ...#"
                ,"      ## ##  ...#"
                ,"     ### ########"
                ,"     # ooo ##"
                ," #####  o o #####"
                ,"##   #o o   #   #"
                ,"#@ o  o    o  o #"
                ,"###### oo o #####"
                ,"     #      #"
                ,"     ########"
                ],
                [" ###  #############"
                ,"##@####       #   #"
                ,"# oo   oo  o o ...#"
                ,"#  ooo#    o  #...#"
                ,"# o   # oo oo #...#"
                ,"###   #  o    #...#"
                ,"#     # o o o #...#"
                ,"#    ###### ###...#"
                ,"## #  #  o o  #...#"
                ,"#  ## # oo o o##..#"
                ,"# ..# #  o      #.#"
                ,"# ..# # ooo ooo #.#"
                ,"##### #       # #.#"
                ,"    # ######### #.#"
                ,"    #           #.#"
                ,"    ###############"
                ],
                ["          ####"
                ,"     #### #  #"
                ,"   ### @###o #"
                ,"  ##      o  #"
                ," ##  o oo## ##"
                ," #  #o##     #"
                ," # # o oo # ###"
                ," #   o #  # o #####"
                ,"####    #  oo #   #"
                ,"#### ## o         #"
                ,"#.    ###  ########"
                ,"#.. ..# ####"
                ,"#...#.#"
                ,"#.....#"
                ,"#######"
                ],
                ["################"
                ,"#              #"
                ,"# # ######     #"
                ,"# #  o o o o#  #"
                ,"# #   o@o   ## ##"
                ,"# #  o o o###...#"
                ,"# #   o o  ##...#"
                ,"# ###ooo o ##...#"
                ,"#     # ## ##...#"
                ,"#####   ## ##...#"
                ,"    #####     ###"
                ,"        #     #"
                ,"        #######"
                ],
                ["   #########"
                ,"  ##   ##  #####"
                ,"###     #  #    ###"
                ,"#  o #o #  #  ... #"
                ,"# # o#@o## # #.#. #"
                ,"#  # #o  #    . . #"
                ,"# o    o # # #.#. #"
                ,"#   ##  ##o o . . #"
                ,"# o #   #  #o#.#. #"
                ,"## o  o   o  o... #"
                ," #o ######    ##  #"
                ," #  #    ##########"
                ," ####"
                ],
                ["       #######"
                ," #######     #"
                ," #     # o@o #"
                ," #oo #   #########"
                ," # ###......##   #"
                ," #   o......## # #"
                ," # ###......     #"
                ,"##   #### ### #o##"
                ,"#  #o   #  o  # #"
                ,"#  o ooo  # o## #"
                ,"#   o o ###oo # #"
                ,"#####     o   # #"
                ,"    ### ###   # #"
                ,"      #     #   #"
                ,"      ########  #"
                ,"             ####"
                ],
                ["   ########"
                ,"   #   #  #"
                ,"   #  o   #"
                ," ### #o   ####"
                ," #  o  ##o   #"
                ," #  # @ o # o#"
                ," #  #      o ####"
                ," ## ####o##     #"
                ," # o#.....# #   #"
                ," #  o..**. o# ###"
                ,"##  #.....#   #"
                ,"#   ### #######"
                ,"# oo  #  #"
                ,"#  #     #"
                ,"######   #"
                ,"     #####"
                ],
                ["#####"
                ,"#   ##"
                ,"#    #  ####"
                ,"# o  ####  #"
                ,"#  oo o   o#"
                ,"###@ #o    ##"
                ," #  ##  o o ##"
                ," # o  ## ## .#"
                ," #  #o##o  #.#"
                ," ###   o..##.#"
                ,"  #    #.*...#"
                ,"  # oo #.....#"
                ,"  #  #########"
                ,"  #  #"
                ,"  ####"
                ],
                ["   ##########"
                ,"   #..  #   #"
                ,"   #..      #"
                ,"   #..  #  ####"
                ,"  #######  #  ##"
                ,"  #            #"
                ,"  #  #  ##  #  #"
                ,"#### ##  #### ##"
                ,"#  o  ##### #  #"
                ,"# # o  o  # o  #"
                ,"# @o  o   #   ##"
                ,"#### ## #######"
                ,"   #    #"
                ,"   ######"
                ],
                ["     ###########"
                ,"     #  .  #   #"
                ,"     # #.    @ #"
                ," ##### ##..# ####"
                ,"##  # ..###     ###"
                ,"# o #...   o #  o #"
                ,"#    .. ##  ## ## #"
                ,"####o##o# o #   # #"
                ,"  ## #    #o oo # #"
                ,"  #  o # #  # o## #"
                ,"  #               #"
                ,"  #  ###########  #"
                ,"  ####         ####"
                ],
                ["  ######"
                ,"  #   @####"
                ,"##### o   #"
                ,"#   ##    ####"
                ,"# o #  ##    #"
                ,"# o #  ##### #"
                ,"## o  o    # #"
                ,"## o o ### # #"
                ,"## #  o  # # #"
                ,"## # #o#   # #"
                ,"## ###   # # ######"
                ,"#  o  #### # #....#"
                ,"#    o    o   ..#.#"
                ,"####o  o# o   ....#"
                ,"#       #  ## ....#"
                ,"###################"
                ],
                ["    ##########"
                ,"#####        ####"
                ,"#     #   o  #@ #"
                ,"# #######o####  ###"
                ,"# #    ## #  #o ..#"
                ,"# # o     #  #  #.#"
                ,"# # o  #     #o ..#"
                ,"# #  ### ##     #.#"
                ,"# ###  #  #  #o ..#"
                ,"# #    #  ####  #.#"
                ,"# #o   o  o  #o ..#"
                ,"#    o # o o #  #.#"
                ,"#### o###    #o ..#"
                ,"   #    oo ###....#"
                ,"   #      ## ######"
                ,"   ########"
                ],
                ["#########"
                ,"#       #"
                ,"#       ####"
                ,"## #### #  #"
                ,"## #@##    #"
                ,"# ooo o  oo#"
                ,"#  # ## o  #"
                ,"#  # ##  o ####"
                ,"####  ooo o#  #"
                ," #   ##   ....#"
                ," # #   # #.. .#"
                ," #   # # ##...#"
                ," ##### o  #...#"
                ,"     ##   #####"
                ,"      #####"
                ],
                ["######     ####"
                ,"#    #######  #####"
                ,"#   o#  #  o  #   #"
                ,"#  o  o  o # o o  #"
                ,"##o o   # @# o    #"
                ,"#  o ########### ##"
                ,"# #   #.......# o#"
                ,"# ##  # ......#  #"
                ,"# #   o........o #"
                ,"# # o #.... ..#  #"
                ,"#  o o####o#### o#"
                ,"# o   ### o   o  ##"
                ,"# o     o o  o    #"
                ,"## ###### o ##### #"
                ,"#         #       #"
                ,"###################"
                ],
                ["    #######"
                ,"    #  #  ####"
                ,"##### o#o #  ##"
                ,"#.. #  #  #   #"
                ,"#.. # o#o #  o####"
                ,"#.  #     #o  #  #"
                ,"#..   o#  # o    #"
                ,"#..@#  #o #o  #  #"
                ,"#.. # o#     o#  #"
                ,"#.. #  #oo#o  #  ##"
                ,"#.. # o#  #  o#o  #"
                ,"#.. #  #  #   #   #"
                ,"##. ####  #####   #"
                ," ####  ####   #####"
                ],
                ["###############"
                ,"#..........  .####"
                ,"#..........oo.#  #"
                ,"###########o #   ##"
                ,"#      o  o     o #"
                ,"## ####   #  o #  #"
                ,"#      #   ##  # ##"
                ,"#  o#  # ##  ### ##"
                ,"# o #o###    ### ##"
                ,"###  o #  #  ### ##"
                ,"###    o ## #  # ##"
                ," # o  #  o  o o   #"
                ," #  o  o#ooo  #   #"
                ," #  #  o      #####"
                ," # @##  #  #  #"
                ," ##############"
                ],
                ["####"
                ,"#  ##############"
                ,"#  #   ..#......#"
                ,"#  # # ##### ...#"
                ,"##o#    ........#"
                ,"#   ##o######  ####"
                ,"# o #     ######@ #"
                ,"##o # o   ######  #"
                ,"#  o #ooo##       #"
                ,"#      #    #o#o###"
                ,"# #### #ooooo    #"
                ,"# #    o     #   #"
                ,"# #   ##        ###"
                ,"# ######o###### o #"
                ,"#        #    #   #"
                ,"##########    #####"
                ],
                [" #######"
                ," #  #  #####"
                ,"##  #  #...###"
                ,"#  o#  #...  #"
                ,"# o #oo ...  #"
                ,"#  o#  #... .#"
                ,"#   # o########"
                ,"##o       o o #"
                ,"##  #  oo #   #"
                ," ######  ##oo@#"
                ,"      #      ##"
                ,"      ########"
                ],
                [" #################"
                ," #...   #    #   ##"
                ,"##.....  o## # #o #"
                ,"#......#  o  #    #"
                ,"#......#  #  # #  #"
                ,"######### o  o o  #"
                ,"  #     #o##o ##o##"
                ," ##   o    # o    #"
                ," #  ## ### #  ##o #"
                ," # o oo     o  o  #"
                ," # o    o##o ######"
                ," #######  @ ##"
                ,"       ######"
                ],
                ["         #####"
                ,"     #####   #"
                ,"    ## o  o  ####"
                ,"##### o  o o ##.#"
                ,"#       oo  ##..#"
                ,"#  ###### ###.. #"
                ,"## #  #    #... #"
                ,"# o   #    #... #"
                ,"#@ #o ## ####...#"
                ,"####  o oo  ##..#"
                ,"   ##  o o  o...#"
                ,"    # oo  o #  .#"
                ,"    #   o o  ####"
                ,"    ######   #"
                ,"         #####"
                ],
                ["#####"
                ,"#   ##"
                ,"# o  #########"
                ,"## # #       ######"
                ,"## #   o#o#@  #   #"
                ,"#  #      o #   o #"
                ,"#  ### ######### ##"
                ,"#  ## ..*..... # ##"
                ,"## ## *.*..*.* # ##"
                ,"# o########## ##o #"
                ,"#  o   o  o    o  #"
                ,"#  #   #   #   #  #"
                ,"###################"
                ],
                ["       ###########"
                ,"       #   #     #"
                ,"#####  #     o o #"
                ,"#   ##### o## # ##"
                ,"# o ##   # ## o  #"
                ,"# o  @oo # ##ooo #"
                ,"## ###   # ##    #"
                ,"## #   ### #####o#"
                ,"## #     o  #....#"
                ,"#  ### ## o #....##"
                ,"# o   o #   #..o. #"
                ,"#  ## o #  ##.... #"
                ,"#####   ######...##"
                ,"    #####    #####"
                ],
                ["  ####"
                ,"  #  #########"
                ," ##  ##  #   #"
                ," #  o# o@o   ####"
                ," #o  o  # o o#  ##"
                ,"##  o## #o o     #"
                ,"#  #  # #   ooo  #"
                ,"# o    o  o## ####"
                ,"# o o #o#  #  #"
                ,"##  ###  ###o #"
                ," #  #....     #"
                ," ####......####"
                ,"   #....####"
                ,"   #...##"
                ,"   #...#"
                ,"   #####"
                ],
                ["      ####"
                ,"  #####  #"
                ," ##     o#"
                ,"## o  ## ###"
                ,"#@o o # o  #"
                ,"#### ##   o#"
                ," #....#o o #"
                ," #....#   o#"
                ," #....  oo ##"
                ," #... # o   #"
                ," ######o o  #"
                ,"      #   ###"
                ,"      #o ###"
                ,"      #  #"
                ,"      ####"
                ],
                [" ###########"
                ," #     ##  #"
                ," #   o   o #"
                ,"#### ## oo #"
                ,"#   o #    #"
                ,"# ooo # ####"
                ,"#   # # o ##"
                ,"#  #  #  o #"
                ,"# o# o#    #"
                ,"#   ..# ####"
                ,"####.. o #@#"
                ,"#.....# o# #"
                ,"##....#  o #"
                ," ##..##    #"
                ,"  ##########"
                ],
                [" #########"
                ," #....   ##"
                ," #.#.#  o ##"
                ,"##....# # @##"
                ,"# ....#  #  ##"
                ,"#     #o ##o #"
                ,"## ###  o    #"
                ," #o  o o o#  #"
                ," # #  o o ## #"
                ," #  ###  ##  #"
                ," #    ## ## ##"
                ," #  o #  o  #"
                ," ###o o   ###"
                ,"   #  #####"
                ,"   ####"
                ],
                ["############ ######"
                ,"#   #    # ###....#"
                ,"#   oo#   @  .....#"
                ,"#   # ###   # ....#"
                ,"## ## ###  #  ....#"
                ," # o o     # # ####"
                ," #  o o##  #      #"
                ,"#### #  #### # ## #"
                ,"#  # #o   ## #    #"
                ,"# o  o  # ## #   ##"
                ,"# # o o    # #   #"
                ,"#  o ## ## # #####"
                ,"# oo     oo  #"
                ,"## ## ### o  #"
                ," #    # #    #"
                ," ###### ######"
                ],
                ["            #####"
                ,"#####  ######   #"
                ,"#   ####  o o o #"
                ,"# o   ## ## ##  ##"
                ,"#   o o     o  o #"
                ,"### o  ## ##     ##"
                ,"  # ##### #####oo #"
                ," ##o##### @##     #"
                ," # o  ###o### o  ##"
                ," # o  #   ###  ###"
                ," # oo o #   oo #"
                ," #     #   ##  #"
                ," #######.. .###"
                ,"    #.........#"
                ,"    #.........#"
                ,"    ###########"
                ],
                ["###########"
                ,"#......   #########"
                ,"#......   #  ##   #"
                ,"#..### o    o     #"
                ,"#... o o #   ##   #"
                ,"#...#o#####    #  #"
                ,"###    #   #o  #o #"
                ,"  #  oo o o  o##  #"
                ,"  #  o   #o#o ##o #"
                ,"  ### ## #    ##  #"
                ,"   #  o o ## ######"
                ,"   #    o  o  #"
                ,"   ##   # #   #"
                ,"    #####@#####"
                ,"        ###"
                ],
                ["      ####"
                ,"####### @#"
                ,"#     o  #"
                ,"#   o## o#"
                ,"##o#...# #"
                ," # o...  #"
                ," # #. .# ##"
                ," #   # #o #"
                ," #o  o    #"
                ," #  #######"
                ," ####"
                ],
                ["             ######"
                ," #############....#"
                ,"##   ##     ##....#"
                ,"#  oo##  o @##....#"
                ,"#      oo o#  ....#"
                ,"#  o ## oo # # ...#"
                ,"#  o ## o  #  ....#"
                ,"## ##### ### ##.###"
                ,"##   o  o ##   .  #"
                ,"# o###  # ##### ###"
                ,"#   o   #       #"
                ,"#  o #o o o###  #"
                ,"# ooo# o   # ####"
                ,"#    #  oo #"
                ,"######   ###"
                ,"     #####"
                ],
                ["    ############"
                ,"    #          ##"
                ,"    #  # #oo o  #"
                ,"    #o #o#  ## @#"
                ,"   ## ## # o # ##"
                ,"   #   o #o  # #"
                ,"   #   # o   # #"
                ,"   ## o o   ## #"
                ,"   #  #  ##  o #"
                ,"   #    ## oo# #"
                ,"######oo   #   #"
                ,"#....#  ########"
                ,"#.#... ##"
                ,"#....   #"
                ,"#....   #"
                ,"#########"
                ],
                ["           #####"
                ,"          ##   ##"
                ,"         ##     #"
                ,"        ##  oo  #"
                ,"       ## oo  o #"
                ,"       # o    o #"
                ,"####   #   oo #####"
                ,"#  ######## ##    #"
                ,"#.            ooo@#"
                ,"#.# ####### ##   ##"
                ,"#.# #######. #o o##"
                ,"#........... #    #"
                ,"##############  o #"
                ,"             ##  ##"
                ,"              ####"
                ],
                ["     ########"
                ,"  ####      ######"
                ,"  #    ## o o   @#"
                ,"  # ## ##o#o o o##"
                ,"### ......#  oo ##"
                ,"#   ......#  #   #"
                ,"# # ......#o  o  #"
                ,"# #o...... oo# o #"
                ,"#   ### ###o  o ##"
                ,"###  o  o  o  o #"
                ,"  #  o  o  o  o #"
                ,"  ######   ######"
                ,"       #####"
                ],
                ["        #######"
                ,"    #####  #  ####"
                ,"    #   #   o    #"
                ," #### #oo ## ##  #"
                ,"##      # #  ## ###"
                ,"#  ### o#o  o  o  #"
                ,"#...    # ##  #   #"
                ,"#...#    @ # ### ##"
                ,"#...#  ###  o  o  #"
                ,"######## ##   #   #"
                ,"          #########"
                ],
                [" #####"
                ," #   #"
                ," # # #######"
                ," #      o@######"
                ," # o ##o ###   #"
                ," # #### o    o #"
                ," # ##### #  #o ####"
                ,"##  #### ##o      #"
                ,"#  o#  o  # ## ## #"
                ,"#         # #...# #"
                ,"######  ###  ...  #"
                ,"     #### # #...# #"
                ,"          # ### # #"
                ,"          #       #"
                ,"          #########"
                ],
                ["##### ####"
                ,"#...# #  ####"
                ,"#...###  o  #"
                ,"#....## o  o###"
                ,"##....##   o  #"
                ,"###... ## o o #"
                ,"# ##    #  o  #"
                ,"#  ## # ### ####"
                ,"# o # #o  o    #"
                ,"#  o @ o    o  #"
                ,"#   # o oo o ###"
                ,"#  ######  ###"
                ,"# ##    ####"
                ,"###"
                ],
                ["##########"
                ,"#        ####"
                ,"# ###### #  ##"
                ,"# # o o o  o #"
                ,"#       #o   #"
                ,"###o  oo#  ###"
                ,"  #  ## # o##"
                ,"  ##o#   o @#"
                ,"   #  o o ###"
                ,"   # #   o  #"
                ,"   # ##   # #"
                ,"  ##  ##### #"
                ,"  #         #"
                ,"  #.......###"
                ,"  #.......#"
                ,"  #########"
                ],
                ["         ####"
                ," #########  ##"
                ,"##  o      o #####"
                ,"#   ## ##   ##...#"
                ,"# #oo o oo#o##...#"
                ,"# #   @   #   ...#"
                ,"#  o# ###oo   ...#"
                ,"# o  oo  o ##....#"
                ,"###o       #######"
                ,"  #  #######"
                ,"  ####"
                ],
                ["  #########"
                ,"  #*.*#*.*#"
                ,"  #.*.*.*.#"
                ,"  #*.*.*.*#"
                ,"  #.*.*.*.#"
                ,"  #*.*.*.*#"
                ,"  ###   ###"
                ,"    #   #"
                ,"###### ######"
                ,"#           #"
                ,"# o o o o o #"
                ,"## o o o o ##"
                ," #o o o o o#"
                ," #   o@o   #"
                ," #  #####  #"
                ," ####   ####"
                ],
                ["       ####"
                ,"       #  ##"
                ,"       #   ##"
                ,"       # oo ##"
                ,"     ###o  o ##"
                ,"  ####    o   #"
                ,"###  # #####  #"
                ,"#    # #....o #"
                ,"# #   o ....# #"
                ,"#  o # #.*..# #"
                ,"###  #### ### #"
                ,"  #### @o  ##o##"
                ,"     ### o     #"
                ,"       #  ##   #"
                ,"       #########"
                ],
                ["      ############"
                ,"     ##..    #   #"
                ,"    ##..* o    o #"
                ,"   ##..*.# # # o##"
                ,"   #..*.# # # o  #"
                ,"####...#  #    # #"
                ,"#  ## #          #"
                ,"# @o o ###  #   ##"
                ,"# o   o   # #   #"
                ,"###oo   # # # # #"
                ,"  #   o   # # #####"
                ,"  # o# #####      #"
                ,"  #o   #   #    # #"
                ,"  #  ###   ##     #"
                ,"  #  #      #    ##"
                ,"  ####      ######"
                ]
               ];

/* Constants */
var CANVAS_WIDTH = 400;
var CANVAS_HEIGHT = 400;
var TILE_SIZE = 20;

/* Mutable things: */
var gCanvasContext;
var gMap;
var gPlayerPos;
var gLevelNumber = 0;
var gImage;

/* newGame destroys the old level and creates a new one */
function newGame(level) {

  /* If level is null, pick a random level */
  if (level == "random") level = Math.floor(Math.random() * gRawMaps.length);

  /* thisMap will be the level to load */
  thisMap = gRawMaps[level];

  /* Clear gMap and canvas: */
  for (var i = 0; i < CANVAS_WIDTH / TILE_SIZE; i++)
    for (var j = 0; j < CANVAS_HEIGHT / TILE_SIZE; j++)
      gCanvasContext.drawImage(gImage,
          0, 0, TILE_SIZE, TILE_SIZE,
          i * TILE_SIZE, j * TILE_SIZE, TILE_SIZE, TILE_SIZE);

  //gCanvasContext.fillStyle = "white";
  //gCanvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gMap = [];

  /* Create new gMap and draw it to screen */
  var token;
  for (var i = 0; i < thisMap.length; i++) {
    for (var j = 0, tmparr = []; j < thisMap[i].length; j++) {
      switch (thisMap[i][j]) {
        case ' ': token = 0; break;
        case '#': token = 1; break;
        case 'o': token = 2; break;
        case '*': token = 3; break;
        case '@': token = 4; gPlayerPos = [j, i]; break;
        case '+': token = 5; break;
        case '.': token = 6; break;
      }
      tmparr.push(token);
      gCanvasContext.drawImage(gImage,
          token * TILE_SIZE, 0, TILE_SIZE, TILE_SIZE,
          j * TILE_SIZE, i * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
    gMap.push(tmparr);
  }

  /* Write down the level number */
  gCanvasContext.fillStyle = "black";
  gCanvasContext.fillText(
      "Level: " + (gLevelNumber + 1) + " (press space to reset level)", 
      0, CANVAS_HEIGHT-TILE_SIZE -5);
}

/* Handle events */
function handleEvent(event) {

  /* Read wasd / hjkl or returns */
  switch (event.keyCode) {
    case 97:  case 104: /* a/h -> moveLeft */ 
      var dx = -1, dy = 0; break;
    case 115: case 106: /* s/j -> moveDown */ 
      var dx = 0, dy = 1; break;
    case 119: case 107: /* w/k -> moveUp */ 
      var dx = 0, dy = -1; break;
    case 100: case 108: /* d/l -> moveRight */ 
      var dx = 1; dy = 0; break;
    case 32: /* space -> resetLevel */
      newGame(gLevelNumber); return; break;
    default: return; break;
  }

  /* Remove player from old position and add to new */
  function move_player(dx, dy) {

    /* First check if it's possible to move crate */
    if (gMap[gPlayerPos[1] + dy][gPlayerPos[0] + dx] != 0 &&
        gMap[gPlayerPos[1] + dy][gPlayerPos[0] + dx] != 6)
      return;

    /* Fetch  player position */
    var playerX = gPlayerPos[0] * TILE_SIZE;
    var playerY = gPlayerPos[1] * TILE_SIZE;

    /* Fetch wall image to draw with */
    switch (gMap[gPlayerPos[1]][gPlayerPos[0]]) {
      case 4: var newValue = 0; break;
      case 5: var newValue = 6; break;
    }

    /* Draw image */
    gCanvasContext.drawImage(gImage,
        newValue * TILE_SIZE, 0, TILE_SIZE, TILE_SIZE,
        playerX, playerY, TILE_SIZE, TILE_SIZE);
        gMap[gPlayerPos[1]][gPlayerPos[0]] = newValue; 

    /* Move player */
    gPlayerPos[0] += dx;
    gPlayerPos[1] += dy;

    /* Fetch new position */
    var playerX = gPlayerPos[0] * TILE_SIZE;
    var playerY = gPlayerPos[1] * TILE_SIZE;

    /* Fetch player image to draw */
    switch (gMap[gPlayerPos[1]][gPlayerPos[0]]) {
      case 0: newValue = 4; break;
      case 6: newValue = 5; break;
    }
    /* Draw Image */
    gMap[gPlayerPos[1]][gPlayerPos[0]] = newValue;
    gCanvasContext.drawImage(gImage,
        newValue * TILE_SIZE, 0, TILE_SIZE, TILE_SIZE,
        playerX, playerY, TILE_SIZE, TILE_SIZE);
  }

  function move_crate(dx, dy) {

    /* First check if it's possible to move crate */
    if (gMap[gPlayerPos[1] + dy*2][gPlayerPos[0] + dx*2] != 0 &&
        gMap[gPlayerPos[1] + dy*2][gPlayerPos[0] + dx*2] != 6)
      return;
    
    /* Remove crate */
    var crateX = gPlayerPos[0] + dx;
    var crateY = gPlayerPos[1] + dy;
    var crateTileX = crateX * TILE_SIZE;
    var crateTileY = crateY * TILE_SIZE;

    /* Change move-from position */
    switch (gMap[crateY][crateX]) {
      case 2: gMap[crateY][crateX] = 0; break;
      case 3: gMap[crateY][crateX] = 6; break;
    }

    /* Move crate */
    crateX += dx;
    crateY += dy;
    crateTileX = crateX * TILE_SIZE;
    crateTileY = crateY * TILE_SIZE;

    switch (gMap[crateY][crateX]) {
      case 0: var newValue = 2; break;
      case 6: var newValue = 3; break;
    }

    gMap[crateY][crateX] = newValue; 
    gCanvasContext.drawImage(gImage,
        newValue * TILE_SIZE, 0, TILE_SIZE, TILE_SIZE,
        crateTileX, crateTileY, TILE_SIZE, TILE_SIZE);

    if (newValue == 3) {
        /* If the player has won: load next level */
        for (var i = 0; i < gMap.length; i++) 
          for (var j = 0; j < gMap[i].length; j++) 
            if (gMap[i][j] == 2) return;
        newGame(++gLevelNumber);
    }
  }

  switch (gMap[gPlayerPos[1] + dy][gPlayerPos[0] + dx]) {
    /* Open ground */ 
    case 0: move_player(dx, dy); break;
    /* Stone */
    /* Stone in place */ 
    case 2: case 3: move_crate(dx, dy); move_player(dx, dy); break;
    /* Socket */ 
    case 6: move_player(dx, dy); break;
  }
}

function initMain(canvasName) {

  /* Load Image first */
  gImage = new Image();
  gImage.src = "tiles.png";
  gImage.onload = function () {

    var canvas = document.getElementById(canvasName);
    canvas.width = CANVAS_WIDTH
    canvas.height = CANVAS_HEIGHT
    canvas.addEventListener("keypress", handleEvent, false);
    gCanvasContext = canvas.getContext("2d");
    gCanvasContext.font = "bold " + TILE_SIZE + "px sans-serif";
    gCanvasContext.textBaseline = "top";

  newGame(gLevelNumber);
  }
}

