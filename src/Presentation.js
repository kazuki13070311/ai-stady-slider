import React from "react";
import {
  Deck,
  Slide,
  Heading,
  Text,
  ListItem,
  UnorderedList,
  Box,
  FlexBox,
  Image,
  Notes,
  CodePane,
  CodeSpan,
  Appear,
  Grid,
} from "spectacle";
import DialogBlock from "./DialogBlock";
import CodeBlock from "./CodeBlock";

// テーマ設定
const theme = {
  colors: {
    primary: "#0a84ff",
    secondary: "#6c757d",
    tertiary: "#ffffff",
    quaternary: "#f8f9fa",
    quinary: "#282c34",
  },
  fonts: {
    header: '"Noto Sans JP", sans-serif',
    text: '"Noto Sans JP", sans-serif',
    monospace: '"Source Code Pro", monospace',
  },
  fontSizes: {
    h1: "52px",
    h2: "40px",
    h3: "32px",
    text: "22px",
    monospace: "20px",
  },
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <Text fontSize="0.5em">Cursorを使った開発事例紹介</Text>
    </Box>
    <Box padding="1em">
      <Text fontSize="0.5em">
        スライド {"{slideNumber}"} / {"{slideCount}"}
      </Text>
    </Box>
  </FlexBox>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    {/* タイトルスライド */}
    <Slide backgroundColor="primary">
      <Heading color="tertiary">Cursorを使った開発事例紹介</Heading>
      <Heading fontSize="h3" color="tertiary" margin="20px 0 0">
        〜AIとの対話でスムーズなコード実装〜
      </Heading>
      <Notes>
        今日はCursorを使った開発事例について紹介します。AIとどのように対話しながら効率よく開発を進めるか、実例を交えて解説します。
      </Notes>
    </Slide>

    {/* イントロダクション */}
    <Slide>
      <Heading fontSize="h2">はじめに</Heading>
      <Text>
        今日は「Cursorを使った実際の開発プロセス」について、具体的な対話事例をもとに紹介します。
        Cursorとどのようにコミュニケーションを取りながら開発を進めるか、そのコツをお伝えします。
      </Text>
      <Notes>
        はじめに、このLTの目的を説明します。単にCursorの機能紹介ではなく、実際の開発プロセスで
        どのようにAIと対話し、どのような結果が得られるのかを実例を通じて紹介します。
      </Notes>
    </Slide>

    {/* Cursorとは */}
    <Slide>
      <Heading fontSize="h2">Cursorとは？</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>AIを活用したコーディング支援エディタ</ListItem>
        </Appear>
        <Appear>
          <ListItem>Claude AIを搭載したバージョンがさらに強力</ListItem>
        </Appear>
        <Appear>
          <ListItem>対話形式で開発を進められる</ListItem>
        </Appear>
        <Appear>
          <ListItem>既存コードベースの理解と拡張が得意</ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        Cursorの基本的な説明をします。特に既存コードベースに対する理解力と拡張能力が高い点を強調します。
      </Notes>
    </Slide>

    {/* 開発事例紹介 */}
    <Slide>
      <Heading fontSize="h2">開発事例：コンタクトBANリスト管理機能</Heading>
      <Text>今回開発する機能：</Text>
      <UnorderedList>
        <ListItem>
          メールアドレスをBANリストに追加・削除・閲覧する管理機能
        </ListItem>
        <ListItem>問い合わせをステルスブロックする仕組み</ListItem>
      </UnorderedList>
      <Notes>
        今回紹介する開発事例の概要を説明します。比較的シンプルながらも実用的な機能です。
      </Notes>
    </Slide>

    {/* 対話例1: 要件を伝える */}
    <Slide>
      <Heading fontSize="h2">AIとの対話例：要件を伝える</Heading>
      <DialogBlock
        userMessage="@contact_ban.rb を使ってemailをcontact_banテーブルに追加してbanしたり、banしたemail情報を閲覧できるようなページと機能を作成してください。"
        aiMessage="まず、`contact_ban`モデルとテーブルの構造を確認し、必要な機能を実装していきます。"
        codeBlock={`class ContactBan < ApplicationRecord
  validates :email, presence: true
end

テーブル構造:
create_table "contact_bans", charset: "utf8mb4" do |t|
  t.string "email", null: false
  t.datetime "created_at", precision: 6, null: false
  t.datetime "updated_at", precision: 6, null: false
  t.index ["email"], name: "index_contact_bans_on_email", unique: true
end`}
        codeTitle="モデルとテーブル構造の確認"
      />
      <Notes>
        AIとの対話の最初の例です。まず要件を伝え、AIがどのように応答するかを示します。
        AIは既存のモデルとテーブル構造を把握してから実装に入っています。
      </Notes>
    </Slide>

    {/* ポイント1 */}
    <Slide backgroundColor="quaternary">
      <Heading fontSize="h2" color="primary">
        ポイント①：既存コードの調査
      </Heading>
      <UnorderedList>
        <ListItem>
          Cursorは、既存のファイル構造やコードスタイルを検索・理解できる
        </ListItem>
        <ListItem>
          自分のアプリケーションの構造に合わせた提案をしてくれる
        </ListItem>
        <ListItem>具体的なファイル名や機能を指定すると効果的</ListItem>
      </UnorderedList>
      <Notes>
        Cursorが既存コードを調査する能力について説明します。具体的な指示を出すことで
        より適切な提案が得られることを強調します。
      </Notes>
    </Slide>

    {/* 対話例2: コードの実装 */}
    <Slide>
      <Heading fontSize="h2">AIとの対話例：コードの実装</Heading>
      <DialogBlock
        userMessage="_sidebar.html.slim にもpath追加して"
        aiMessage="サイドバーにコンタクトBANリストへのリンクを追加します。"
        codeBlock={`.sidebar
  ul.nav.sidebar-menu
    li = link_to "ユーザ管理", authority_admin_root_path
    li = link_to "ゲーム管理", authority_admin_games_path
    li = link_to "記事管理", authority_admin_archives_path
    li = link_to "メールBANリスト", authority_admin_contact_bans_path`}
        codeTitle="_sidebar.html.slim"
      />
      <Notes>
        ここでは非常に簡潔な指示でも、Cursorが文脈を理解して適切なコードを生成できることを示しています。
      </Notes>
    </Slide>

    {/* ポイント2 */}
    <Slide backgroundColor="quaternary">
      <Heading fontSize="h2" color="primary">
        ポイント②：簡潔な指示でも理解してくれる
      </Heading>
      <UnorderedList>
        <ListItem>
          一度コンテキストを理解すると、短い指示でも適切に対応してくれる
        </ListItem>
        <ListItem>
          既に作成している機能の関連部分も自動的に推測してくれる
        </ListItem>
        <ListItem>「〇〇して」という簡単な日本語指示でも実装できる</ListItem>
      </UnorderedList>
      <Notes>
        Cursorとの対話では、一度コンテキストを理解すると短い指示でも適切に応答してくれることを説明します。
        この例では「追加して」だけで意図を理解しています。
      </Notes>
    </Slide>

    {/* 対話例3: エラーの解決 */}
    <Slide>
      <Heading fontSize="h2">AIとの対話例：エラーの解決</Heading>
      <DialogBlock
        userMessage={`destroyリクエストがエラーになる。
Request URL: http://damrey.com:3000/authority_admin/contact_bans/2
Request Method: GET
Status Code: 404 Not Found`}
        aiMessage="問題は削除リンクのHTTPメソッドが正しく適用されていないことです。DELETEメソッドではなくGETメソッドでリクエストが送信されています。"
        codeBlock={`td
  = form_with url: authority_admin_contact_ban_path(ban), method: :delete, local: true do |f|
    = submit_tag '削除', class: 'label label-danger', 
      data: { confirm: "#{ban.email}をBANリストから削除してもよろしいですか？" }`}
        codeTitle="修正案"
      />
      <Notes>
        エラーが発生した際の対応例です。エラーメッセージを共有するだけで、Cursorは問題を特定し
        適切な修正案を提案しています。
      </Notes>
    </Slide>

    {/* ポイント3 */}
    <Slide backgroundColor="quaternary">
      <Heading fontSize="h2" color="primary">
        ポイント③：エラーメッセージを共有する
      </Heading>
      <UnorderedList>
        <ListItem>
          エラーの内容をそのまま共有すると、原因と解決策を提案してくれる
        </ListItem>
        <ListItem>問題の本質を理解し、Rails特有の問題も認識できる</ListItem>
        <ListItem>技術的な専門用語を使わなくても対応してくれる</ListItem>
      </UnorderedList>
      <Notes>
        エラーメッセージをそのまま共有することの重要性を説明します。
        技術的な説明を追加しなくても、AIがエラーの本質を理解して解決策を提案してくれます。
      </Notes>
    </Slide>

    {/* 対話例4: UI改善の提案 */}
    <Slide>
      <Heading fontSize="h2">AIとの対話例：UI改善の提案</Heading>
      <DialogBlock
        userMessage="@index.html.slim のUIは、 @index.html.slim と同じにして。参考に"
        aiMessage="`contact_bans/index.html.slim`のUIを`archives/index.html.slim`と同じスタイルに変更します。"
        codeBlock={`.box
  .box-body
    .row.row--stack
      = form_with model: @contact_ban, url: authority_admin_contact_bans_path, local: true do |f|
        .col-xs-6
          .input-group
            .input-group-addon メールアドレス
            = f.email_field :email, class: 'form-control input-sm', required: true, placeholder: 'example@example.com'
        .col-xs-2
          = f.submit "BANリストに追加", class: "btn btn-primary btn-sm"`}
        codeTitle="修正後のUI"
      />
      <Notes>
        既存UIを参考にした実装例です。単に「同じにして」だけでも、意図を理解して
        UIの統一感を保った実装を提案しています。
      </Notes>
    </Slide>

    {/* ポイント4 */}
    <Slide backgroundColor="quaternary">
      <Heading fontSize="h2" color="primary">
        ポイント④：既存UIの流用
      </Heading>
      <UnorderedList>
        <ListItem>
          「同じにして」という指示だけでも、UIの統一感を維持できる
        </ListItem>
        <ListItem>
          細かいスタイルクラスやレイアウト構造も適切に再現してくれる
        </ListItem>
        <ListItem>参考にしたいファイルを明示すると効果的</ListItem>
      </UnorderedList>
      <Notes>
        既存UIを参照した実装のポイントを説明します。Cursorがアプリケーション全体の
        デザインパターンを理解してくれることで、UI の統一性を保てます。
      </Notes>
    </Slide>

    {/* 対話例5: 細かな修正 */}
    <Slide>
      <Heading fontSize="h2">AIとの対話例：細かな修正 (1)</Heading>
      <DialogBlock
        userMessage="日本時間にして"
        aiMessage="日本時間で表示するように修正します。"
        codeBlock={`td = ban.id
td = ban.email
td = l ban.created_at.in_time_zone('Tokyo'), format: :long
td
  = form_with url: authority_admin_contact_ban_path(ban), method: :delete, local: true, class: 'display-inline' do`}
      />
      <Notes>
        日本時間表示に関する対話例です。簡潔な指示に対してAIが適切なコードを提案しています。
      </Notes>
    </Slide>

    {/* 対話例5の続き */}
    <Slide>
      <Heading fontSize="h2">AIとの対話例：細かな修正 (2)</Heading>
      <DialogBlock
        userMessage="既存のrailsメソッド使えばもっと簡単に出来ない？"
        aiMessage="その通りです。アプリケーションのタイムゾーンは既に'Tokyo'に設定されているため、単にl ban.created_at, format: :longとするだけで日本時間で表示されます。"
        codeBlock={`td = ban.id
td = ban.email
td = l ban.created_at, format: :long
td
  = form_with url: authority_admin_contact_ban_path(ban), method: :delete, local: true, class: 'display-inline' do`}
      />
      <Notes>
        対話を通じた改善の例です。最初の提案に対してさらに質問することで、
        より効率的なコードに改善されています。
      </Notes>
    </Slide>

    {/* ポイント5 */}
    <Slide backgroundColor="quaternary">
      <Heading fontSize="h2" color="primary">
        ポイント⑤：対話を通じた改善
      </Heading>
      <UnorderedList>
        <ListItem>
          出力されたコードに対して質問や改善案を出すと対応してくれる
        </ListItem>
        <ListItem>実装の背景や理由も説明してくれる</ListItem>
        <ListItem>より効率的な方法を提案することもある</ListItem>
      </UnorderedList>
      <Notes>
        対話を通じた改善のポイントを説明します。AIの提案を無条件に受け入れるのではなく、
        質問や改善案を通じてより良いコードに発展させることができます。
      </Notes>
    </Slide>

    {/* 対話例6: フォーマットの調整 */}
    <Slide>
      <Heading fontSize="h2">AIとの対話例：フォーマットの調整</Heading>
      <DialogBlock
        userMessage={`+9000は不要
\`\`\`
2025年03月15日(土) 02時41分50秒 +0900
\`\`\``}
        aiMessage="タイムゾーン表示を削除するために、strftimeを使用します："
        codeBlock={`td = ban.created_at.strftime('%Y年%m月%d日(%a) %H時%M分%S秒')`}
      />
      <Notes>
        具体例を示すことで意図を明確に伝える例です。AIは補足情報から何が必要かを正確に理解しています。
      </Notes>
    </Slide>

    {/* ポイント6 */}
    <Slide backgroundColor="quaternary">
      <Heading fontSize="h2" color="primary">
        ポイント⑥：情報の補完
      </Heading>
      <UnorderedList>
        <ListItem>意図を表す例を示すと理解しやすくなる</ListItem>
        <ListItem>部分的な情報でも全体を推測して対応してくれる</ListItem>
        <ListItem>具体例を示すとより正確な実装につながる</ListItem>
      </UnorderedList>
      <Notes>
        情報を補完する重要性について説明します。具体例を示すことで意図が明確になり、
        より正確な実装につながります。
      </Notes>
    </Slide>

    {/* 効果的な対話のコツ */}
    <Slide>
      <Heading fontSize="h2">Cursorとの効果的な対話のコツ</Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridGap={15}>
        <Box>
          <UnorderedList>
            <ListItem>明確な要件から始める</ListItem>
            <ListItem>段階的に指示を出す</ListItem>
            <ListItem>エラーを共有する</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <UnorderedList>
            <ListItem>既存コードを参照する</ListItem>
            <ListItem>対話を通じて改善する</ListItem>
            <ListItem>具体例や期待する出力を示す</ListItem>
          </UnorderedList>
        </Box>
      </Grid>
      <Notes>
        Cursorとの効果的な対話のコツをまとめます。これらのポイントを押さえることで、
        より効率的かつ正確な開発が可能になります。
      </Notes>
    </Slide>

    {/* 実際の開発フロー */}
    <Slide>
      <Heading fontSize="h2">実際の開発フロー例</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>モデルの調査と必要な機能の特定</ListItem>
        </Appear>
        <Appear>
          <ListItem>コントローラーの作成</ListItem>
        </Appear>
        <Appear>
          <ListItem>ビューの作成</ListItem>
        </Appear>
        <Appear>
          <ListItem>ルーティングの設定</ListItem>
        </Appear>
        <Appear>
          <ListItem>サイドバーへのリンク追加</ListItem>
        </Appear>
        <Appear>
          <ListItem>エラー修正とUIの改善</ListItem>
        </Appear>
        <Appear>
          <ListItem>細かな調整（日付フォーマットなど）</ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        実際の開発フローを順番に説明します。段階的に機能を実装していく流れを示しています。
      </Notes>
    </Slide>

    {/* まとめ */}
    <Slide>
      <Heading fontSize="h2">まとめ</Heading>
      <UnorderedList>
        <ListItem>Cursorは対話を通じてコードを進化させていくツール</ListItem>
        <ListItem>短い指示でも意図を汲み取ってくれる</ListItem>
        <ListItem>エラーから学習し、解決策を提案してくれる</ListItem>
        <ListItem>既存コードベースに沿った実装が得意</ListItem>
        <ListItem>段階的な改善を通じて品質の高いコードに導いてくれる</ListItem>
      </UnorderedList>
      <Notes>
        Cursorの特徴と利点をまとめます。対話型の開発スタイルがもたらす効率性と品質向上について強調します。
      </Notes>
    </Slide>

    {/* 最後に */}
    <Slide backgroundColor="primary">
      <Heading color="tertiary">最後に</Heading>
      <Text color="tertiary">
        Cursorとの対話を通じた開発は、単にコード生成を依頼するだけでなく、
        パートナーとして一緒に考えながら開発を進める新しいスタイルです。
      </Text>
      <Text color="tertiary" margin="20px 0 0">
        AIの力を借りつつも、最終的な判断と責任は開発者にあることを
        忘れずに活用していきましょう！
      </Text>
      <Notes>
        AIツールの可能性と限界について触れつつ、開発者の責任についても言及します。
        AIはあくまでツールであり、最終的な判断は人間が行うことの重要性を強調します。
      </Notes>
    </Slide>

    {/* Q&A */}
    <Slide>
      <Heading fontSize="h2">Q&A</Heading>
      <FlexBox height="100%" flexDirection="column" justifyContent="center">
        <Text fontSize="h3">ご質問をお待ちしています！</Text>
      </FlexBox>
      <Notes>
        質疑応答の時間です。Cursorの具体的な使い方や、今回の事例に関する質問を受け付けます。
      </Notes>
    </Slide>
  </Deck>
);

export default Presentation;
