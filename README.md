# Instagram-Convert-Url
Convert Instagram post url to ID. 将 Instagram 帖子链接转换为 ID。

# Usage
```JavaScript
ig.decode('CrMCCN3glz4')
>> 3083848793263856888

ig.encode('3083848793263856888')
>> CrMCCN3glz4

ig.getPostUrl('3083848793263856888')
>> https://www.instagram.com/p/CrMCCN3glz4/

ig.getPostID('https://www.instagram.com/p/CrMCCN3glz4/')
>> 3083848793263856888
```
