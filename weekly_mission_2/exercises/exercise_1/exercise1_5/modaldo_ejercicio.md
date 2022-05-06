# Modelado de Twitter

```mermaid
    classDiagram
    class User{
        -Username : Text
        -Name : Text
        -LastName : Text
        -Birthday : Date
        -JoinedDate : Date
        -Bio : Text
        -ProfilePicture : Image
        -ProfileBanner : Image
        +getUsername() Text
        +setUsername(username) void
        +Getters and Setters()
        +getFullName() Text
    }
    class TendingTopic{
        -Position: integer
        -Hashtag: Hashtag
        -CategoryName: Text
        +setHashtag(hashtag) void
        +Setters an>d Getters()
        +getTweetsAmount() integer
    }
```
```mermaid
    classDiagram
    class Hashtag{
        -Title : Text
        -Tweets : List~Tweet~
        +getTweets() List~Tweet~
        +getTweetsAmount() integer
    }
    class Tweet{
        -Body : Text
        -User : User
        -Likes : integer
        +Setter and Getters()
        +getBodyLenght() integer
    }
```

# Modelado de Facebook

```mermaid
    classDiagram
    class User{
        -Name : Text
        -LastName : Text
        -Bio : Biografy
        -Birthday : Date
        -ProfilePicture : Image
        -ProfileBanner : Image
        -Friends : List~User~
        +Getters and Setters()
        +getFullName() Text
        +getAmountFriends() integer
    }
    class Post{
        -Author : User
        -Body : Text
        -Created : Date
        -Updated : Date
        -Comments : List~Comment~
        -Reactions : List~Reaction~
        +Setters and Getters()
        +getAmountComments() integer
        +getAmountReactions() integer
    }
    class Biografy{
        -Post : List~Post~
        +getPosts() List~Post~
        +addPost(post) bool
        +deletePost(index) bool
    }
```

# Modelado de Uber

~~~mermaid
    classDiagram
    class Profile{
        -Username : Text
        -Raiting : integer
        -Reviews : List~Review~-
        -Car : Text
        +Getters and Setters()
        -setRaiting() integer
        +addReview(review) bool
    }
    class Travel{
        -Destination : Text
        -Begin : Text
        -Duration : integer
        -Distance : integer
        +Setters and Getters()
        +detailsOfTravel() Text
    }
    class Review{
        -Rate : integer
        -Title : Text
        -Body : Text
        -Travel : Travel
        +Setters and Getters()
        +getDetailsOfReview() Text
    }
~~~