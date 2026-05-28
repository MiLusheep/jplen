import asyncio
import edge_tts
import os

KANA_LIST = [
    ('あ', 'a'), ('い', 'i'), ('う', 'u'), ('え', 'e'), ('お', 'o'),
    ('か', 'ka'), ('き', 'ki'), ('く', 'ku'), ('け', 'ke'), ('こ', 'ko'),
    ('さ', 'sa'), ('し', 'shi'), ('す', 'su'), ('せ', 'se'), ('そ', 'so'),
    ('た', 'ta'), ('ち', 'chi'), ('つ', 'tsu'), ('て', 'te'), ('と', 'to'),
    ('な', 'na'), ('に', 'ni'), ('ぬ', 'nu'), ('ね', 'ne'), ('の', 'no'),
    ('は', 'ha'), ('ひ', 'hi'), ('ふ', 'fu'), ('へ', 'he'), ('ほ', 'ho'),
    ('ま', 'ma'), ('み', 'mi'), ('む', 'mu'), ('め', 'me'), ('も', 'mo'),
    ('や', 'ya'), ('ゆ', 'yu'), ('よ', 'yo'),
    ('ら', 'ra'), ('り', 'ri'), ('る', 'ru'), ('れ', 're'), ('ろ', 'ro'),
    ('わ', 'wa'), ('を', 'wo'), ('ん', 'n'),
    ('が', 'ga'), ('ぎ', 'gi'), ('ぐ', 'gu'), ('げ', 'ge'), ('ご', 'go'),
    ('ざ', 'za'), ('じ', 'ji'), ('ず', 'zu'), ('ぜ', 'ze'), ('ぞ', 'zo'),
    ('だ', 'da'), ('ぢ', 'di'), ('づ', 'du'), ('で', 'de'), ('ど', 'do'),
    ('ば', 'ba'), ('び', 'bi'), ('ぶ', 'bu'), ('べ', 'be'), ('ぼ', 'bo'),
    ('ぱ', 'pa'), ('ぴ', 'pi'), ('ぷ', 'pu'), ('ぺ', 'pe'), ('ぽ', 'po'),
    ('きゃ', 'kya'), ('きゅ', 'kyu'), ('きょ', 'kyo'),
    ('しゃ', 'sha'), ('しゅ', 'shu'), ('しょ', 'sho'),
    ('ちゃ', 'cha'), ('ちゅ', 'chu'), ('ちょ', 'cho'),
    ('にゃ', 'nya'), ('にゅ', 'nyu'), ('にょ', 'nyo'),
    ('ひゃ', 'hya'), ('ひゅ', 'hyu'), ('ひょ', 'hyo'),
    ('みゃ', 'mya'), ('みゅ', 'myu'), ('みょ', 'myo'),
    ('りゃ', 'rya'), ('りゅ', 'ryu'), ('りょ', 'ryo'),
    ('ぎゃ', 'gya'), ('ぎゅ', 'gyu'), ('ぎょ', 'gyo'),
    ('じゃ', 'ja'), ('じゅ', 'ju'), ('じょ', 'jo'),
    ('びゃ', 'bya'), ('びゅ', 'byu'), ('びょ', 'byo'),
    ('ぴゃ', 'pya'), ('ぴゅ', 'pyu'), ('ぴょ', 'pyo'),
]

VOICE = 'ja-JP-NanamiNeural'
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'audio', 'kana')


async def generate_one(kana, romaji):
    filepath = os.path.join(OUTPUT_DIR, f'{romaji}.mp3')
    if os.path.exists(filepath) and os.path.getsize(filepath) > 500:
        print(f'[SKIP] {kana} ({romaji}) already exists')
        return True
    try:
        communicate = edge_tts.Communicate(kana, VOICE, rate='-20%')
        await communicate.save(filepath)
        size = os.path.getsize(filepath)
        if size < 500:
            os.remove(filepath)
            print(f'[FAIL] {kana} ({romaji}): file too small ({size} bytes)')
            return False
        print(f'[OK] {kana} ({romaji}) -> {romaji}.mp3 ({size} bytes)')
        return True
    except Exception as e:
        print(f'[FAIL] {kana} ({romaji}): {e}')
        if os.path.exists(filepath):
            os.remove(filepath)
        return False


async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    success = 0
    failed = 0
    for kana, romaji in KANA_LIST:
        if await generate_one(kana, romaji):
            success += 1
        else:
            failed += 1
        await asyncio.sleep(0.2)
    print(f'\nDone: {success} success, {failed} failed')


if __name__ == '__main__':
    asyncio.run(main())
