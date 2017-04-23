package shoppingcart.util;

/**
 * Created by Sorumi on 17/2/2.
 */
public enum ResultMessage {
    SUCCESS, // 成功
    FAILED, // 失败
    WRONG, // 错误
    EXIST, // 已存在
    NOT_EXIST, // 不存在
    TOO_LONG, // 输入过长
    TOO_SHORT, // 输入过短
    INVALID, // 含有非法字符
    NULL, // 输入为空
    INSUFFICIENT, // 数量不足
    SUFFICIENT, // 数量充足
    TRUE, // 判断为真
    FALSE; //判断为假
}
