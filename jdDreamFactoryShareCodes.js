/*
京喜工厂互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let shareCodes = [
  '4HL35B_v85-TsEGQbQTfFg==@q3X6tiRYVGYuAO4OD1-Fcg==@Gkf3Upy3YwQn2K3kO1hFFg==@w8B9d4EVh3e3eskOT5PR1A==@1s8ZZnxD6DVDyjdEUu-zXA==@FyYWfETygv_4XjGtnl2YSg==@us6se4fFC6cSjHDSS_ScMw==@oWcboKZa9XxTSWd28tCEPA==@sboe5PFeXgL2EWpxucrKYw==@rm-j1efPyFU50GBjacgEsw==@1rQLjMF_eWMiQ-RAWARW_w==@bHIVoTmS-fHA6G9ixqnOxfjRNGe1YfJzIbBoF-NEAOw=@6h514zWW6JNRE_Kp-L4cjA==@WFlk160B_Byd-xNNEyRPJQ==@bxUPiWroac-c9PLIPSjnNQ==@P2nGgK6JgLtCqJBeQJ0f27XXLQwYAFHrKmA2siZTuj8=@LTyKtCPGU6v0uv-n1GSwfQ==@y7KhVRopnOwB1qFo2vIefg==@WnaDbsWYwImvOD1CpkeVWA==@Y4r32JTAKNBpMoCXvBf7oA==@oWcboKZa9XxTSWd28tCEPA==@sboe5PFeXgL2EWpxucrKYw==@rm-j1efPyFU50GBjacgEsw==@Q4Rij5_6085kuANMaAvBMA==@gTLa05neWl8UFTGKpFLeog==@U_NgGvEUnbU6IblJUTMQV3F7G5ihingk9kVobx99yrY=@BXXbkqJN7sr-0Qkid6v27A==',//账号一的好友shareCode,不同好友中间用@符号隔开
  '-OvElMzqeyeGBWazWYjI1Q==',//账号二的好友shareCode，不同好友中间用@符号隔开
'4HL35B_v85-TsEGQbQTfFg==@q3X6tiRYVGYuAO4OD1-Fcg==@Gkf3Upy3YwQn2K3kO1hFFg==@w8B9d4EVh3e3eskOT5PR1A==@1s8ZZnxD6DVDyjdEUu-zXA==@FyYWfETygv_4XjGtnl2YSg==@us6se4fFC6cSjHDSS_ScMw==@oWcboKZa9XxTSWd28tCEPA==@sboe5PFeXgL2EWpxucrKYw==@rm-j1efPyFU50GBjacgEsw==@1rQLjMF_eWMiQ-RAWARW_w==@bHIVoTmS-fHA6G9ixqnOxfjRNGe1YfJzIbBoF-NEAOw=@6h514zWW6JNRE_Kp-L4cjA==@WFlk160B_Byd-xNNEyRPJQ==@bxUPiWroac-c9PLIPSjnNQ==@P2nGgK6JgLtCqJBeQJ0f27XXLQwYAFHrKmA2siZTuj8=@LTyKtCPGU6v0uv-n1GSwfQ==@y7KhVRopnOwB1qFo2vIefg==@WnaDbsWYwImvOD1CpkeVWA==@Y4r32JTAKNBpMoCXvBf7oA==@oWcboKZa9XxTSWd28tCEPA==@sboe5PFeXgL2EWpxucrKYw==@rm-j1efPyFU50GBjacgEsw==@Q4Rij5_6085kuANMaAvBMA==@gTLa05neWl8UFTGKpFLeog==@U_NgGvEUnbU6IblJUTMQV3F7G5ihingk9kVobx99yrY=@BXXbkqJN7sr-0Qkid6v27A==',
'4HL35B_v85-TsEGQbQTfFg==@q3X6tiRYVGYuAO4OD1-Fcg==@Gkf3Upy3YwQn2K3kO1hFFg==@w8B9d4EVh3e3eskOT5PR1A==@1s8ZZnxD6DVDyjdEUu-zXA==@FyYWfETygv_4XjGtnl2YSg==@us6se4fFC6cSjHDSS_ScMw==@oWcboKZa9XxTSWd28tCEPA==@sboe5PFeXgL2EWpxucrKYw==@rm-j1efPyFU50GBjacgEsw==@1rQLjMF_eWMiQ-RAWARW_w==@bHIVoTmS-fHA6G9ixqnOxfjRNGe1YfJzIbBoF-NEAOw=@6h514zWW6JNRE_Kp-L4cjA==@WFlk160B_Byd-xNNEyRPJQ==@bxUPiWroac-c9PLIPSjnNQ==@P2nGgK6JgLtCqJBeQJ0f27XXLQwYAFHrKmA2siZTuj8=@LTyKtCPGU6v0uv-n1GSwfQ==@y7KhVRopnOwB1qFo2vIefg==@WnaDbsWYwImvOD1CpkeVWA==@Y4r32JTAKNBpMoCXvBf7oA==@oWcboKZa9XxTSWd28tCEPA==@sboe5PFeXgL2EWpxucrKYw==@rm-j1efPyFU50GBjacgEsw==@Q4Rij5_6085kuANMaAvBMA==@gTLa05neWl8UFTGKpFLeog==@U_NgGvEUnbU6IblJUTMQV3F7G5ihingk9kVobx99yrY=@BXXbkqJN7sr-0Qkid6v27A==',
'4HL35B_v85-TsEGQbQTfFg==@q3X6tiRYVGYuAO4OD1-Fcg==@Gkf3Upy3YwQn2K3kO1hFFg==@w8B9d4EVh3e3eskOT5PR1A==@1s8ZZnxD6DVDyjdEUu-zXA==@FyYWfETygv_4XjGtnl2YSg==@us6se4fFC6cSjHDSS_ScMw==@oWcboKZa9XxTSWd28tCEPA==@sboe5PFeXgL2EWpxucrKYw==@rm-j1efPyFU50GBjacgEsw==@1rQLjMF_eWMiQ-RAWARW_w==@bHIVoTmS-fHA6G9ixqnOxfjRNGe1YfJzIbBoF-NEAOw=@6h514zWW6JNRE_Kp-L4cjA==@WFlk160B_Byd-xNNEyRPJQ==@bxUPiWroac-c9PLIPSjnNQ==@P2nGgK6JgLtCqJBeQJ0f27XXLQwYAFHrKmA2siZTuj8=@LTyKtCPGU6v0uv-n1GSwfQ==@y7KhVRopnOwB1qFo2vIefg==@WnaDbsWYwImvOD1CpkeVWA==@Y4r32JTAKNBpMoCXvBf7oA==@oWcboKZa9XxTSWd28tCEPA==@sboe5PFeXgL2EWpxucrKYw==@rm-j1efPyFU50GBjacgEsw==@Q4Rij5_6085kuANMaAvBMA==@gTLa05neWl8UFTGKpFLeog==@U_NgGvEUnbU6IblJUTMQV3F7G5ihingk9kVobx99yrY=@BXXbkqJN7sr-0Qkid6v27A==',
'4HL35B_v85-TsEGQbQTfFg==@q3X6tiRYVGYuAO4OD1-Fcg==@Gkf3Upy3YwQn2K3kO1hFFg==@w8B9d4EVh3e3eskOT5PR1A==@1s8ZZnxD6DVDyjdEUu-zXA==@FyYWfETygv_4XjGtnl2YSg==@us6se4fFC6cSjHDSS_ScMw==@oWcboKZa9XxTSWd28tCEPA==@sboe5PFeXgL2EWpxucrKYw==@rm-j1efPyFU50GBjacgEsw==@1rQLjMF_eWMiQ-RAWARW_w==@bHIVoTmS-fHA6G9ixqnOxfjRNGe1YfJzIbBoF-NEAOw=@6h514zWW6JNRE_Kp-L4cjA==@WFlk160B_Byd-xNNEyRPJQ==@bxUPiWroac-c9PLIPSjnNQ==@P2nGgK6JgLtCqJBeQJ0f27XXLQwYAFHrKmA2siZTuj8=@LTyKtCPGU6v0uv-n1GSwfQ==@y7KhVRopnOwB1qFo2vIefg==@WnaDbsWYwImvOD1CpkeVWA==@Y4r32JTAKNBpMoCXvBf7oA==@oWcboKZa9XxTSWd28tCEPA==@sboe5PFeXgL2EWpxucrKYw==@rm-j1efPyFU50GBjacgEsw==@Q4Rij5_6085kuANMaAvBMA==@gTLa05neWl8UFTGKpFLeog==@U_NgGvEUnbU6IblJUTMQV3F7G5ihingk9kVobx99yrY=@BXXbkqJN7sr-0Qkid6v27A==',
]
// 判断github action里面是否有京喜工厂互助码
if (process.env.DREAM_FACTORY_SHARE_CODES) {
  if (process.env.DREAM_FACTORY_SHARE_CODES.indexOf('&') > -1) {
    console.log(`您的互助码选择的是用&隔开\n`)
    shareCodes = process.env.DREAM_FACTORY_SHARE_CODES.split('&');
  } else if (process.env.DREAM_FACTORY_SHARE_CODES.indexOf('\n') > -1) {
    console.log(`您的互助码选择的是用换行隔开\n`)
    shareCodes = process.env.DREAM_FACTORY_SHARE_CODES.split('\n');
  } else {
    shareCodes = process.env.DREAM_FACTORY_SHARE_CODES.split();
  }
} else if (process.env.DREAM_FACTORY_SHARE_CODES) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < shareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['shareCodes' + index] = shareCodes[i];
}
